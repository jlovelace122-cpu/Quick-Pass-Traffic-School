"""
Converts BDI and ADI resubmission .txt files to print-ready PDFs
with sequential page numbers, headers, and clean formatting.
"""
from fpdf import FPDF
import os

BASE = os.path.dirname(os.path.abspath(__file__))

FILES = [
    {
        "input":  os.path.join(BASE, "florida-bdi-4hour-resubmission.txt"),
        "output": os.path.join(BASE, "florida-bdi-4hour-resubmission.pdf"),
        "title":  "BDI 4-Hour Course Resubmission",
        "subject": "Basic Driver Improvement — FLHSMV Resubmission",
    },
    {
        "input":  os.path.join(BASE, "florida-adi-12hour-resubmission.txt"),
        "output": os.path.join(BASE, "florida-adi-12hour-resubmission.pdf"),
        "title":  "ADI 12-Hour Course Resubmission",
        "subject": "Advanced Driver Improvement — FLHSMV Resubmission",
    },
]

# Lines beginning with these strings get special treatment
HEADING_MARKERS = ("====", "----")
SECTION_MARKER = "====="


class ResubmissionPDF(FPDF):
    def __init__(self, doc_title, doc_subject):
        super().__init__()
        self.doc_title = doc_title
        self.doc_subject = doc_subject
        self.set_margins(25, 25, 25)  # 1-inch margins
        self.set_auto_page_break(auto=True, margin=20)

    def header(self):
        # Thin rule at top of every page
        self.set_font("Helvetica", "B", 8)
        self.set_text_color(100, 100, 100)
        self.cell(0, 5, "Quick Pass Traffic School  |  FLHSMV Course Resubmission  |  Confidential", align="C")
        self.ln(3)
        self.set_draw_color(180, 180, 180)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(4)
        self.set_text_color(0, 0, 0)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(100, 100, 100)
        self.cell(0, 10, f"Page {self.page_no()}", align="C")
        self.set_text_color(0, 0, 0)


def is_rule_line(line: str) -> bool:
    stripped = line.strip()
    return stripped.startswith("=") and len(stripped) >= 4 and len(set(stripped)) <= 2

def is_dash_rule(line: str) -> bool:
    stripped = line.strip()
    return stripped.startswith("-") and len(stripped) >= 4 and len(set(stripped)) <= 2

def is_blank(line: str) -> bool:
    return line.strip() == ""


def sanitize(text: str) -> str:
    """Replace Unicode characters unsupported by Helvetica with ASCII equivalents."""
    replacements = {
        "\u2014": "--",   # em dash
        "\u2013": "-",    # en dash
        "\u2018": "'",    # left single quote
        "\u2019": "'",    # right single quote
        "\u201c": '"',    # left double quote
        "\u201d": '"',    # right double quote
        "\u2022": "-",    # bullet
        "\u2026": "...",  # ellipsis
        "\u00ae": "(R)",  # registered trademark
        "\u2122": "(TM)", # trademark
        "\u00a0": " ",    # non-breaking space
        "\u2012": "-",    # figure dash
        "\u2011": "-",    # non-breaking hyphen
        "\u2010": "-",    # hyphen
        "\u2015": "--",   # horizontal bar
        "\u0097": "--",   # windows em dash (cp1252)
    }
    for char, repl in replacements.items():
        text = text.replace(char, repl)
    # Drop anything else outside latin-1 range
    return text.encode("latin-1", errors="replace").decode("latin-1")


def convert(cfg: dict):
    from fpdf.enums import XPos, YPos

    with open(cfg["input"], encoding="utf-8", errors="replace") as f:
        raw = f.readlines()

    # Sanitize every line upfront
    lines = [sanitize(ln.rstrip("\n")) for ln in raw]

    pdf = ResubmissionPDF(cfg["title"], cfg["subject"])
    pdf.set_title(cfg["title"])
    pdf.set_author("Quick Pass Traffic School")
    pdf.set_creator("Quick Pass Traffic School PDF Generator")
    pdf.add_page()

    W = pdf.w - pdf.l_margin - pdf.r_margin  # usable width

    def body(text, size=9.5, style=""):
        pdf.set_font("Helvetica", style, size)
        pdf.multi_cell(W, 5.5, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    def indented(text, size=9, style=""):
        pdf.set_font("Helvetica", style, size)
        pdf.cell(8, 5, "")
        pdf.multi_cell(W - 8, 5, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    i = 0
    n = len(lines)

    while i < n:
        line = lines[i]

        # ── Rule of = signs ──────────────────────────────────────────────
        if is_rule_line(line):
            # Look ahead for heading pattern: rule / text / rule
            j = i + 1
            heading_parts = []
            while j < n and not is_rule_line(lines[j]) and not is_dash_rule(lines[j]):
                t = lines[j].strip()
                if t:
                    heading_parts.append(t)
                j += 1
            if heading_parts and j < n and is_rule_line(lines[j]):
                pdf.ln(4)
                pdf.set_font("Helvetica", "B", 10)
                pdf.set_fill_color(220, 235, 255)
                pdf.cell(W, 7, "  " + "  ".join(heading_parts),
                         fill=True, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
                pdf.ln(3)
                i = j + 1
            else:
                pdf.set_draw_color(180, 180, 180)
                pdf.line(pdf.l_margin, pdf.get_y(), pdf.w - pdf.r_margin, pdf.get_y())
                pdf.ln(3)
                i += 1
            continue

        # ── Dash rule ─────────────────────────────────────────────────────
        if is_dash_rule(line):
            pdf.set_draw_color(210, 210, 210)
            pdf.line(pdf.l_margin, pdf.get_y(), pdf.w - pdf.r_margin, pdf.get_y())
            pdf.ln(2)
            i += 1
            continue

        # ── Blank line ────────────────────────────────────────────────────
        if is_blank(line):
            pdf.ln(3)
            i += 1
            continue

        stripped = line.strip()

        # ── CORRECT / ANSWER / PAGE ref ───────────────────────────────────
        if stripped.startswith(("CORRECT:", "ANSWER:", "PAGE REFERENCE:")):
            pdf.set_font("Helvetica", "I", 9)
            pdf.set_text_color(0, 110, 0)
            pdf.multi_cell(W, 5, stripped, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            pdf.set_text_color(0, 0, 0)
            i += 1
            continue

        # ── Answer choice A) B) C) D) ─────────────────────────────────────
        if len(stripped) >= 3 and stripped[0] in "ABCD" and stripped[1] == ")":
            indented(stripped, size=9)
            i += 1
            continue

        # ── Indented lines (bullet / list) ────────────────────────────────
        if line.startswith("    ") or line.startswith("\t"):
            text = stripped
            if text.startswith("- "):
                text = "- " + text[2:]   # keep dash style (latin-1 safe)
            indented(text, size=9)
            i += 1
            continue

        # ── ALL-CAPS label line ───────────────────────────────────────────
        if stripped.isupper() and len(stripped) > 3:
            body(stripped, size=9, style="B")
            pdf.ln(1)
            i += 1
            continue

        # ── Quiz question line (Q## format) ───────────────────────────────
        first_word = stripped.split(".")[0] if "." in stripped[:4] else stripped[:3]
        if stripped.startswith("Q") and len(stripped) > 2 and stripped[1:3].replace("1","").replace("2","").replace("3","").replace("4","").replace("5","").replace("6","").replace("7","").replace("8","").replace("9","").replace("0","") == "":
            body(stripped, size=9, style="B")
            i += 1
            continue

        # ── Regular body text ─────────────────────────────────────────────
        body(stripped)
        i += 1

    pdf.output(cfg["output"])
    print(f"Created: {os.path.basename(cfg['output'])}  ({pdf.page_no()} pages)")


if __name__ == "__main__":
    for cfg in FILES:
        if not os.path.exists(cfg["input"]):
            print(f"MISSING: {cfg['input']}")
            continue
        convert(cfg)
    print("Done.")

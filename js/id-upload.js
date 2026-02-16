/**
 * Quick Pass Traffic School
 * ID Document Upload Component
 */

class IdUploadWidget {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.init();
    }
    
    init() {
        this.container.innerHTML = `
            <div class="id-upload-widget">
                <h3>Upload Your State ID</h3>
                <p class="upload-description">
                    Please upload a clear photo of your state-issued ID (driver's license or state ID card). 
                    This is required to verify your identity before you can start the course.
                </p>
                
                <div class="upload-zone" id="uploadZone">
                    <input type="file" id="idFileInput" accept="image/*,.pdf" hidden>
                    <div class="upload-content">
                        <svg class="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p class="upload-text">Drag and drop your ID here, or <span class="upload-link">click to browse</span></p>
                        <p class="upload-hint">Accepted formats: JPG, PNG, PDF (max 10MB)</p>
                    </div>
                </div>
                
                <div class="upload-preview" id="uploadPreview" style="display: none;">
                    <img id="previewImage" src="" alt="ID Preview">
                    <button class="remove-preview" id="removePreview">&times;</button>
                </div>
                
                <div class="upload-status" id="uploadStatus"></div>
                
                <button class="btn btn-primary btn-large" id="uploadBtn" disabled>
                    Upload ID Document
                </button>
                
                <div class="upload-tips">
                    <h4>Tips for a successful upload:</h4>
                    <ul>
                        <li>Ensure your ID is not expired</li>
                        <li>Make sure all text is clearly readable</li>
                        <li>Avoid glare or shadows</li>
                        <li>The entire ID should be visible</li>
                    </ul>
                </div>
            </div>
        `;
        
        this.bindEvents();
    }
    
    bindEvents() {
        const zone = document.getElementById('uploadZone');
        const input = document.getElementById('idFileInput');
        const preview = document.getElementById('uploadPreview');
        const previewImage = document.getElementById('previewImage');
        const removeBtn = document.getElementById('removePreview');
        const uploadBtn = document.getElementById('uploadBtn');
        
        // Click to upload
        zone.addEventListener('click', () => input.click());
        
        // Drag and drop
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('dragover');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('dragover');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFile(files[0]);
            }
        });
        
        // File input change
        input.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                this.handleFile(e.target.files[0]);
            }
        });
        
        // Remove preview
        removeBtn.addEventListener('click', () => {
            this.selectedFile = null;
            preview.style.display = 'none';
            zone.style.display = 'block';
            uploadBtn.disabled = true;
            input.value = '';
        });
        
        // Upload button
        uploadBtn.addEventListener('click', () => this.uploadFile());
    }
    
    handleFile(file) {
        // Validate file
        const maxSize = 10 * 1024 * 1024; // 10MB
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
        
        if (!allowedTypes.includes(file.type)) {
            this.showStatus('Please upload a JPG, PNG, or PDF file.', 'error');
            return;
        }
        
        if (file.size > maxSize) {
            this.showStatus('File size must be less than 10MB.', 'error');
            return;
        }
        
        this.selectedFile = file;
        
        // Show preview
        const zone = document.getElementById('uploadZone');
        const preview = document.getElementById('uploadPreview');
        const previewImage = document.getElementById('previewImage');
        const uploadBtn = document.getElementById('uploadBtn');
        
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            previewImage.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23155dfc"%3E%3Cpath d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/%3E%3C/svg%3E';
        }
        
        zone.style.display = 'none';
        preview.style.display = 'block';
        uploadBtn.disabled = false;
        this.showStatus('', '');
    }
    
    async uploadFile() {
        if (!this.selectedFile) return;
        
        const token = localStorage.getItem('auth_token');
        if (!token) {
            this.showStatus('Please log in to upload your ID.', 'error');
            return;
        }
        
        const uploadBtn = document.getElementById('uploadBtn');
        uploadBtn.disabled = true;
        uploadBtn.innerHTML = '<span class="spinner"></span> Uploading...';
        
        try {
            const formData = new FormData();
            formData.append('idDocument', this.selectedFile);
            
            const response = await fetch('/api/id-upload/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Upload failed');
            }
            
            this.showStatus('✓ ID uploaded successfully! Our team will verify it within 24 hours.', 'success');
            uploadBtn.innerHTML = 'Uploaded Successfully';
            
            // Dispatch custom event
            this.container.dispatchEvent(new CustomEvent('idUploaded', { detail: data }));
            
        } catch (error) {
            this.showStatus(error.message || 'Upload failed. Please try again.', 'error');
            uploadBtn.disabled = false;
            uploadBtn.innerHTML = 'Upload ID Document';
        }
    }
    
    showStatus(message, type) {
        const status = document.getElementById('uploadStatus');
        status.textContent = message;
        status.className = `upload-status ${type}`;
    }
}

// Add CSS
const style = document.createElement('style');
style.textContent = `
    .id-upload-widget {
        max-width: 500px;
        margin: 0 auto;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .id-upload-widget h3 {
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
    }
    
    .upload-description {
        color: #6b7280;
        font-size: 0.875rem;
        margin-bottom: 1.5rem;
    }
    
    .upload-zone {
        border: 2px dashed #d1d5db;
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .upload-zone:hover, .upload-zone.dragover {
        border-color: #155dfc;
        background: #eff6ff;
    }
    
    .upload-icon {
        color: #9ca3af;
        margin-bottom: 1rem;
    }
    
    .upload-text {
        font-size: 0.875rem;
        color: #374151;
    }
    
    .upload-link {
        color: #155dfc;
        font-weight: 500;
    }
    
    .upload-hint {
        font-size: 0.75rem;
        color: #9ca3af;
        margin-top: 0.5rem;
    }
    
    .upload-preview {
        position: relative;
        margin: 1rem 0;
    }
    
    .upload-preview img {
        width: 100%;
        max-height: 200px;
        object-fit: contain;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
    }
    
    .remove-preview {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #ef4444;
        color: white;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .upload-status {
        padding: 0.75rem;
        border-radius: 8px;
        font-size: 0.875rem;
        margin: 1rem 0;
    }
    
    .upload-status.success {
        background: #dcfce7;
        color: #166534;
    }
    
    .upload-status.error {
        background: #fee2e2;
        color: #991b1b;
    }
    
    .upload-tips {
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid #e5e7eb;
    }
    
    .upload-tips h4 {
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
    }
    
    .upload-tips ul {
        margin: 0;
        padding-left: 1.25rem;
        font-size: 0.8rem;
        color: #6b7280;
    }
    
    .upload-tips li {
        margin-bottom: 0.25rem;
    }
`;
document.head.appendChild(style);

// Export
window.IdUploadWidget = IdUploadWidget;

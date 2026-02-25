import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageFile {
  file: File;
  preview: string;
  caption?: string;
  isPrimary?: boolean;
}

interface TankImageUploadProps {
  onUpload: (files: ImageFile[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
}

export const TankImageUpload = ({ 
  onUpload, 
  maxFiles = 10,
  maxSizeMB = 5 
}: TankImageUploadProps) => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      setError('Only image files are allowed');
      return false;
    }
    
    // Check file size
    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB > maxSizeMB) {
      setError(`Image must be smaller than ${maxSizeMB}MB`);
      return false;
    }
    
    return true;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    
    setError(null);
    const newImages: ImageFile[] = [];
    
    Array.from(files).forEach((file) => {
      if (images.length + newImages.length >= maxFiles) {
        setError(`Maximum ${maxFiles} images allowed`);
        return;
      }
      
      if (!validateFile(file)) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push({
          file,
          preview: e.target?.result as string,
          isPrimary: images.length === 0 && newImages.length === 0,
        });
        
        if (newImages.length === Array.from(files).length) {
          setImages([...images, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    // If removed primary, make first image primary
    if (images[index].isPrimary && newImages.length > 0) {
      newImages[0].isPrimary = true;
    }
    setImages(newImages);
  };

  const updateCaption = (index: number, caption: string) => {
    const newImages = [...images];
    newImages[index].caption = caption;
    setImages(newImages);
  };

  const setPrimary = (index: number) => {
    const newImages = images.map((img, i) => ({
      ...img,
      isPrimary: i === index,
    }));
    setImages(newImages);
  };

  const handleUpload = () => {
    if (images.length === 0) return;
    onUpload(images);
    setImages([]);
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-2xl p-8 transition-all cursor-pointer ${
          isDragging
            ? 'border-coral-500 bg-coral-50 dark:bg-coral-900/20'
            : 'border-gray-300 dark:border-gray-700 hover:border-coral-400 dark:hover:border-coral-600 bg-gray-50 dark:bg-gray-800/50'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
        
        <div className="flex flex-col items-center text-center">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
            isDragging
              ? 'bg-coral-100 dark:bg-coral-900/40'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}>
            <Upload className={`w-8 h-8 ${
              isDragging ? 'text-coral-600 dark:text-coral-400' : 'text-gray-400'
            }`} />
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {isDragging ? 'Drop images here' : 'Upload Tank Images'}
          </h3>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Drag & drop or click to select • Max {maxFiles} images • Up to {maxSizeMB}MB each
          </p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-xl text-rose-700 dark:text-rose-400 text-sm font-medium"
        >
          {error}
        </motion.div>
      )}

      {/* Image Previews */}
      <AnimatePresence>
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group"
                >
                  {/* Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={image.preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Primary Badge */}
                    {image.isPrimary && (
                      <div className="absolute top-2 left-2 px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded-lg flex items-center gap-1">
                        <Star className="w-3 h-3" fill="currentColor" />
                        <span>Primary</span>
                      </div>
                    )}
                    
                    {/* Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      {!image.isPrimary && (
                        <button
                          onClick={() => setPrimary(index)}
                          className="p-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg transition-colors"
                          title="Set as primary"
                        >
                          <Star className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => removeImage(index)}
                        className="p-2 bg-rose-500/90 hover:bg-rose-500 text-white rounded-lg transition-colors"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Caption Input */}
                  <input
                    type="text"
                    placeholder="Add caption (optional)"
                    value={image.caption || ''}
                    onChange={(e) => updateCaption(index, e.target.value)}
                    className="mt-2 w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none"
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Upload Button */}
            <button
              onClick={handleUpload}
              className="w-full px-6 py-3 bg-coral-600 hover:bg-coral-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <ImageIcon className="w-5 h-5" />
              <span>Upload {images.length} {images.length === 1 ? 'Image' : 'Images'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

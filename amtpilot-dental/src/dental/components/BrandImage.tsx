type BrandImageProps = {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

export function BrandImage({ src, alt, className = '', loading = 'lazy' }: BrandImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`brand-image ${className}`.trim()}
      loading={loading}
      decoding="async"
    />
  )
}

type BrandImageProps = {
  src: string
  alt: string
  className?: string
  crop?: 'face' | 'smile' | 'clinical' | 'environment'
  loading?: 'lazy' | 'eager'
}

export function BrandImage({
  src,
  alt,
  className = '',
  crop,
  loading = 'lazy',
}: BrandImageProps) {
  const cropClass = crop ? ` brand-image--${crop}` : ''
  return (
    <img
      src={src}
      alt={alt}
      className={`brand-image${cropClass} ${className}`.trim()}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
    />
  )
}

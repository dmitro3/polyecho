import Image from 'next/image'
import { Blob } from 'nft.storage'
import PropTypes from 'prop-types'

type ImageOptimizedProps = {
	src: any
	alt?: string
	title?: string
	width?: number
	height?: number
}

const ImageOptimized = (props: ImageOptimizedProps): JSX.Element => {
	const { src, alt, title, width, height } = props

	return (
		<Image
			src={src}
			alt={alt}
			title={title}
			width={width}
			height={height}
			quality={100}
			loading="eager"
			objectFit="cover"
			objectPosition="center"
			placeholder="blur"
			blurDataURL={new Blob([src.toString()], {
				type: 'image/*',
			}).toString()}
		/>
	)
}

ImageOptimized.propTypes = {
	src: PropTypes.any.isRequired,
	alt: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	sx: PropTypes.shape({}),
}

ImageOptimized.defaultProps = {
	alt: 'PolyEcho Image',
	title: 'PolyEcho Image',
	width: 200,
	height: 200,
}

export default ImageOptimized

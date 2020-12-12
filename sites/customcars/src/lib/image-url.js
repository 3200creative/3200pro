import imageUrlBuilder from '@sanity/image-url';
import sanityConfig from '../../../gizmosmn/sanity-studio/sanity.json'

const builder = imageUrlBuilder(sanityConfig.api);

export function imageUrlFor(source) {
  return builder.image(source);
}

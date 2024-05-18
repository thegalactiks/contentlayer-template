import {
  ArticleDocumentType,
  OrganizationDocumentType,
  PageDocumentType,
  PersonDocumentType,
  PlaceDocumentType,
  ProductDocumentType,
  WebsiteDocumentType,
  WebpageElementDocumentType,
} from '@galactiks/contentlayer'
import { makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [
    ArticleDocumentType,
    OrganizationDocumentType,
    PageDocumentType,
    PersonDocumentType,
    PlaceDocumentType,
    ProductDocumentType,
    WebsiteDocumentType,
    WebpageElementDocumentType,
  ],
  mdx: {
    remarkPlugins: [
      remarkGfm,
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeExternalLinks, { rel: ['noopener', 'noreferrer', 'nofollow'] }],
    ],
  },
  disableImportAliasWarning: true,
})

export default contentLayerConfig

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
    remarkPlugins: [remarkGfm],
  },
  disableImportAliasWarning: true,
})

export default contentLayerConfig

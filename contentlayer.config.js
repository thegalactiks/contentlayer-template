import {
  ArticleDocumentType,
  OrganizationDocumentType,
  PageDocumentType,
  PersonDocumentType,
  WebsiteDocumentType,
  WebpageElementDocumentType,
} from '@galactiks/contentlayer/configs'
import { makeSource } from 'contentlayer/source-files';

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [
    ArticleDocumentType,
    OrganizationDocumentType,
    PageDocumentType,
    PersonDocumentType,
    WebsiteDocumentType,
    WebpageElementDocumentType,
  ],
  mdx: {},
  disableImportAliasWarning: true,
})

export default contentLayerConfig

import S from '@sanity/desk-tool/structure-builder'
import {
  MdSettings,
  MdInfo,
  MdHome,
  MdFormatAlignJustify,
  MdBusiness,
  MdMail,
  MdPhotoAlbum,
  MdCollections,
  MdRoomService,
  MdHealing,
  MdExplore,
  MdFace,
  MdViewStream,
} from 'react-icons/md'

import {
  RiArticleLine,
  RiServiceLine,
}from 'react-icons/ri'

import {
  FaPeopleCarry,
}from 'react-icons/fa'

import {
  GrResources
}from 'react-icons/gr'
const hiddenDocTypes = listItem =>
  ![
    'page',
    'post',
    'siteSettings',
    'homepage',
    'landingPage',
    'aboutPage',
    'contactPage',
    'servicesPage',
    'author',
    'category',
    'services',
    'teamMember',
    'resources',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(MdSettings)
        .child(
          S.list()
            .title("Site Settings")
            .items([
              S.listItem()
                .title("Metadata")
                .icon(MdInfo)
                .child(
                  S.document()
                    .title("Metadata")
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
            ])
        ),
      // Add a visual divider (optional)
      S.divider(),
      S.listItem()
      .title('Primary Pages')
      .icon(MdFormatAlignJustify)
      .child(
        S.list()
            .title("dagaz Pages")
            .items([
              S.listItem()
                .title("Homepage")
                .icon(MdHome)
                .child(
                  S.document()
                    .title("Homepage")
                    .schemaType("homepage")
                    .documentId("homepage")
                ),
                S.listItem()
                .title("About Page")
                .icon(MdBusiness)
                .child(
                  S.document()
                    .title("About")
                    .schemaType("aboutPage")
                    .documentId("aboutPage")
                ),
                S.listItem()
                .title("Primary Services Page")
                .icon(MdExplore)
                .child(
                  S.document()
                    .title("Services")
                    .schemaType("servicesPage")
                    .documentId("servicesPage")
                ),
                S.listItem()
                .title("Contact Page")
                .icon(MdMail)
                .child(
                  S.document()
                    .title("Contact")
                    .schemaType("contactPage")
                    .documentId("contactPage")
                ),
            ]),
      ),
      S.listItem()
      .title('General Pages')
      .icon(RiArticleLine)
      .child(
        S.documentTypeList('page')
      ),
      S.listItem()
      .title('Blog')
      .icon(RiArticleLine)
      .child(
        S.documentTypeList('post')
      ),
      S.listItem()
      .title('Services')
      .icon(RiServiceLine)
      .child(
        S.documentTypeList('services')
      ),
      S.listItem()
      .title('Resources')
      .icon(GrResources)
      .child(
        S.documentTypeList('resources')
      ),
      S.listItem()
      .title('Author(s)')
      .icon(MdFace)
      .child(
        S.documentTypeList('author')
      ),
      S.listItem()
      .title('Team Members')
      .icon(FaPeopleCarry)
      .child(
        S.documentTypeList('teamMember')
      ),
      S.listItem()
      .title('Categories')
      .icon(MdViewStream)
      .child(
        S.documentTypeList('category')
      ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])

import { ReactElement } from 'react'

import BookForm from './BookForm'

export default function BookCreate(): ReactElement {
  return <BookForm
    title=""
    subtitle=""
    isbn={Math.floor(Math.random() * 8999999999 + 1111111111).toString()}
    description=""
    authors={['']}
    thumbnails={[{ title: '', url: 'https://ng-buch.de/public/monkey-thinking.svg' }]}
    published=""
    isEdit={false}
  />
}

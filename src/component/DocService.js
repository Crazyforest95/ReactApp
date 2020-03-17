import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'Letter',
      fileName: 'QR_&_ID.pdf',
      margin: 3
    })
  }
}

const Doc = new DocService();
export default Doc;
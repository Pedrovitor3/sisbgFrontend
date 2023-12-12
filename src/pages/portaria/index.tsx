import { useEffect, useState } from 'react';
import { getOneDoc } from '../../hooks/services/axios/documentsService';
import { useParams } from 'react-router-dom';
import logo from '../../assets/ssp-icon.png';
import { FolderOpenOutlined } from '@ant-design/icons';
import { Button } from 'antd';

require('./index.css');

type Props = {
  id: string;
};

export default function Portaria() {
  const { id } = useParams();
  const [documents, setDocuments] = useState<any>();
  const [url, setUrl] = useState<any>();

  const [hasFile, setHasFile] = useState<boolean>(false);

  const getDoc = async () => {
    const res = await getOneDoc(`document/${id}`);
    if (res) {
      if (
        res.data?.arquivo !== null &&
        res.data?.arquivo !== '' &&
        res.data?.arquivo !== undefined
      ) {
        gerarUrl(res.data?.arquivo);
        setHasFile(true);
      }
      setDocuments(res.data);
    }
  };

  const gerarUrl = (base64: string) => {
    // Decodifique a string Base64 in a string binária
    const binaryString = atob(base64);

    // Converta a string binária em um array de bytes
    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }

    // Crie um Blob a partir do array de bytes
    const pdfBlob = new Blob([byteArray], { type: 'application/pdf' });

    const pdfUrl = URL.createObjectURL(pdfBlob);
    setUrl(pdfUrl);
  };

  useEffect(() => {
    getDoc();
    setHasFile(false);
  }, []);

  return (
    <>
      <div className="container-portaria">
        <div className="header">
          <Button className={'button-voltar'} onClick={() => history.back()}>
            Voltar
          </Button>
          <img src={logo} className="logo-portaria" />
          <p className="title-ssp">Intranet SSP</p>
          <div className="info-portaria">
            <p>
              <strong>Portaria:</strong> {documents?.name}
            </p>
            <p>
              <strong>Assunto:</strong> {documents?.assunto}
            </p>
          </div>
        </div>
        <div className="centered-container">
          {hasFile ? (
            <iframe
              className="iframe"
              title={documents?.name}
              name={documents?.name}
              src={url}
            />
          ) : (
            <div className="not-found-container">
              <h1>
                <FolderOpenOutlined sizes={'30'} />
              </h1>
              <h2>Nenhum arquivo foi encontrado.</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import { IoMdAttach } from "react-icons/io";

import { DropContainer, UploadMessager } from './styles';

export default class Upload extends Component {
    render(){
        return (
            <Dropzone accept="image/*" onDropAccepted={()=> {}}>
                {({getRootProps, getInputProps, isDragActivate, isDragReject }) =>(
                    <DropContainer
                        { ...getRootProps()}
                        isDragActivate={isDragActivate}
                        isDragReject={isDragReject}
                    >

                        <input { ...getInputProps()}/>
                        <IoMdAttach color="#ccc" size="30"></IoMdAttach>
                        Importar Arquivo
                    </DropContainer>
                )}
            </Dropzone>
        );
    }
}

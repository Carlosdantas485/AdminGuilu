import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import { IoMdAttach } from "react-icons/io";

import { DropContainer, UploadMessager } from './styles';

export default class Upload extends Component {
    renderDragMessage = (isDragActivate, isDragReject) => {

        if(!isDragActivate){
            return <UploadMessager>Arraste o arquivo...</UploadMessager>
        }
        if(isDragReject){
            return <UploadMessager type="error">Arquivo nao suportado</UploadMessager>
        }
        return<UploadMessager type="success">Solte o arquivo aqui</UploadMessager>

    };
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
                       {this.renderDragMessage(isDragActivate, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
        );
    }
}

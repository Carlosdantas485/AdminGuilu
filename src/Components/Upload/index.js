import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessager } from './styles';

export default class Upload extends Component {
    render(){
        return (
            <Dropzone accept="" onDropAccepted={()=> {}}>
                {({getRootProps, getInputProps, isDragActivate, isDragReject }) =>(
                    <DropContainer
                        { ...getRootProps()}
                        isDragActivate={isDragActivate}
                        isDragReject={isDragReject}
                    >

                        <input { ...getInputProps()}/>
                        Importar
                    </DropContainer>
                )}
            </Dropzone>
        );
    }
}

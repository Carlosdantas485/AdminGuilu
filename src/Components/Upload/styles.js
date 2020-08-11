import styled, { css } from 'styled-components';

const dragActive = css`
    border-color:#78e5d5;
`;

const dragReject = css`
    border-color:#e57878;
`;

export const DropContainer = styled.div.attrs({
    className:"dropzone"
    })`

    width:100%;
    border-radius: 4px;
    border: 2px dashed #ddd;
    outline: 0;
    cursor:pointer;

    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`;

const messageColors ={
    default: '#999',
    error: '#e57878',
    success: '#87e5d5',
};

export const UploadMessager = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content:center;
    align-items: center;
    padding: 15px 0;

`;

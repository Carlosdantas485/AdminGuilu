import styled,{css} from 'styled-components';

const dragActive = css`
    border-color:#78e5d5;
`;

const dragReject = css`
    border-color:#e57878;
`;

export const DropContainer= styled.div.attrs({className:"dropzone"})`

    height: 100%;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    border-radius: 4px;
    cursor:pointer;

    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`;

export const UploadMessager = styled.div`

`;

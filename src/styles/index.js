import s from 'styled-components'

const Button = s.button`
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  text-transform: none;
  overflow: visible;
  margin: 0;
  font-family: inherit;
`

export const EditButton = s(Button)`
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
  float: right!important;
`

export const SaveButton = s(Button)`
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
`

export const CancelButton = s(Button)`
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
`

export const XButton = s(Button)`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  background-color: white;
  color: #212529;
  text-shadow: 0 1px 0 #fff;
  font: 700 1rem Arial;
`

export const DeleteButton = s(Button)`
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  width: 100%;
`

export const AddButton = s(Button)`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  float: right!important;
`

export const NewPostTitle = s.h5`
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0;
`

export const InputBox = s.input`
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
`

export const InputTitle = s.div`
  display: inline-block;
  margin-bottom: .5rem;
`

export const HeaderTitle = s.h1`
  color: rgb(40, 48, 51);
  font-family: "Playfair Display", serif;
  font-weight: 700;
  margin-bottom: 4rem;
  font-size: 2.5rem;
  line-height: 1.2;
  margin-top: 0;
`

export const HeaderDescription = s.h3`
  font-size: 1.75rem;
  margin: .5rem;
  font-weight: 500;
  line-height: 1.2;
  color: rgb(112, 112, 112);
  font-family: Karla, sans-serif;
`

export const ListTitle = s.h1`
  color: rgb(60, 180, 178);
  font-family: Karla, sans-serif;
  font-weight: 700;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  line-height: 1.2;
  margin-top: 0;
`

export const List = s.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const ListElement = s.div`
  width: 25%;
  min-height: 1px;
  display: block;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  margin: 3px;
`

export const PostTitle = s.h5`
  margin-bottom: .75rem;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
  margin-top: 0;
  color: #212529;
  padding: 1.25rem;
`

export const PostImage = s.img`
  width: 100%;
  vertical-align: middle;
  border-style: none;
  margin-bottom: 5px;
  padding: 0rem;
`

export const PostDescription = s.p`
  color: #212529;
  margin: 0;
  display: block;
  padding: 1.25rem;
`

export const AddPostPopUp = s.div`
  background-color: white;
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  width: 480px;
  margin: 40px auto;
  border-radius: .25rem;
  border: 1px solid rgba(0,0,0,.125);
`

export const GreyOut = s.div`
  width: 100%;
  height 100%;
  top: 0; bottom: 0; left: 0; right: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 6000;
`

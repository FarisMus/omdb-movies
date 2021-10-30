import React from 'react';
import { Image, Modal } from 'antd';

const MovieModal = (props) => {
  const { item, show, onClose } = props;

  return (
    <Modal
      title={item.Title}
      visible={show}
      onOk={onClose}
      onCancel={onClose}
    >
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Image src={item.Poster} preview={false}/>
      </div>
    </Modal>
  )
};

export default MovieModal;

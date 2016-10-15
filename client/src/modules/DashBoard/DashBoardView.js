import React from 'react';
import { Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import FaArrowCircleOLeft from 'react-icons/lib/fa/arrow-circle-o-left';
import FaArrowCircleORight from 'react-icons/lib/fa/arrow-circle-o-right';
import { VideoPlayer } from '../../components';

const styles = {
  buttonToggle: {
    height: 30,
    width: 70
  }
}

const fakeData = [
  {
    title: 'React in 15ish minutes - Reactjs Tutorial ',
    videoUrl: 'https://www.youtube.com/embed/PGUMRVowdv8'
  },
  {
    title: 'Zero to Hero with React.js',
    videoUrl: 'https://www.youtube.com/embed/kzcyGNsj858'
  },
  {
    title: 'JSON Powered WebForms in Angular.js and React.js',
    videoUrl: 'https://www.youtube.com/embed/-Kw-moLREck'
  }
];

const DashBoardView = ({
  toggleDashBoard,
  selectItemPlaylist,
  dashboard: { menuLeft, selectItem }
}) => (
  <div style={{ width: '100vw'}}>
    <Col md={12}>
      <Col md={2}>
        <Button onClick={() => toggleDashBoard()}>
          {menuLeft ? (
            <FaArrowCircleOLeft style={styles.buttonToggle} />
          ) : (
            <FaArrowCircleORight style={styles.buttonToggle} />
          )}
        </Button>
      </Col>
    </Col>
    <Col md={12} style={{ marginTop: '5%'}}>
      <Col md={menuLeft ? 3 : null}>
        {menuLeft ? (
          <ListGroup>
            <ListGroupItem style={{ backgroundColor: '#dadada' }}>
              Current playlist: Awesome React
            </ListGroupItem>
            {fakeData.map((item, i) => (
              <ListGroupItem key={i} onClick={() => selectItemPlaylist(item)}>
                {item.title}
              </ListGroupItem>
            ))}
          </ListGroup>
        ) : null}
      </Col>
      <Col md={menuLeft ? 6 : 8}>
        {selectItem ? (
          <VideoPlayer
            height={menuLeft ? 425 : 500}
            width={"100%"}
            src={selectItem.videoUrl}
          />
        ) : null}
      </Col>
      <Col md={menuLeft ? 3 : 4} style={{ border: '1px solid red', height: 500 }}>
        <h1>I'm the note taker here</h1>
      </Col>
    </Col>
  </div>
);

export default DashBoardView;

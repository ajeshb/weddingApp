import React from "react";
import injectSheet from "react-jss";

class MessageComponent extends React.Component {
  messages = [
    "When I passed out of high school, my Senior Cambridge and London Matriculation certificates came by registered post, addressed to my father. When my daughters finished higher secondary, their certificates were distributed at an assembly by the Principal. More recently, such an assembly included me as chief guest to offer a few pearls of wisdom and present the prizes, followed by the Principal distributing the certificates.",
    "What a contrast to what I’ve been through in California recently! My grandson’s high school graduation was spread over the two weeks I was there and more. It’s bigger than graduating from college, I was told.",
    "I wasn’t there for all of it, but from hearsay and experience this is what high school graduation from a leading private school was like. It apparently started with the Prom, a dance organised by Classes 12 and 11, to say farewell by one and to hand over the baton to the other.",
    "All very formal, tuxedos and long dresses (no saris or cheongsams, though more than half the class was Asian) and grandson taking a corsage when he went to pick up his ‘date’ as well as a cake he had baked for her mother.",
    "Next came what sounded like a retreat, a week at Laguna Beach for the seniors, a class trip to do some last-minute bonding. At the end of it, I was able to catch up with the person who had invited me for his graduation. But then we lost my daughter and husband to the seniors’ moms’ lunch and grads’ dads’ barbecue and a couple of other graduating family parties, before we caught up with them for Baccalaureate.",
    "Held in the school’s outdoor quadrangle early one evening that still called for me to choose warm clothing, it was meant to be a farewell function to bless the outgoing students, who attended all duly robed."
  ];
  render() {
    const { classes } = this.props;
    return (
      <div className={classes["message-page"]}>
        <ul className="list">
          <li>Messages</li>
          {this.messages.map((message, index) => (
            <li key={index} className="list-item">
              {message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  "message-page": {
    '& .list': {
      listStyleType: 'none',
      margin: "20px 20px",
      margin: '15px 25%',
      paddingLeft: '0px',
      '& .list-item':{
        border: '3px solid red',
        padding: '20px 10px',
        borderRadius: '13px',
        marginTop: '31px',
        fontSize: '26px'
      },
      '@media (min-width: 768px) and (max-width: 991px)': {
        margin: "15px 15%",
        '& .list-item':{
          fontSize: '23px'
        }
      },
      '@media (max-width: 767px)': {
        margin: "15px 5%",
        '& .list-item':{
          fontSize: '21px'
        }
      }
    }
  }
};

export const Messages = injectSheet(styles)(MessageComponent);

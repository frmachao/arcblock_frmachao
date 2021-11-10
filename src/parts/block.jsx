/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Typography, Radio, Tooltip, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { InfoCircleFilled } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const BlockContainer = () => {
  return (
    <div>
      <Typography>
        <div className="block_head">
          <BlockTitle
            title="Block 6662463"
            tips={
              <>
                <p>Block at height</p>
                <p>662463 in the </p>
                <p>Bitcoin blockchain</p>
              </>
            }
          />
          <div className="switch">
            <Radio.Group
              options={[
                { label: 'USD', value: 'USD' },
                { label: 'BTC', value: 'BTC' },
              ]}
              value="USD"
              optionType="button"
              buttonStyle="solid"
            />
          </div>
        </div>

        <Paragraph>
          This block was mined on December 22, 2020 at 3:09 PM GMT+8 by{' '}
          <Link to="/demo" component={Typography.Link}>
            Poolin
          </Link>
          . It currently has 46,562 confirmations on the Bitcoin blockchain.
        </Paragraph>
        <Paragraph>
          The miner(s) of this block earned a total reward of 6.25000000 BTC ($416,066.50). The reward consisted of a
          base reward of 6.25000000 BTC ($416,066.50) with an additional 0.16583560 BTC ($11,039.78) reward paid as fees
          of the 912 transactions which were included in the block. The Block rewards, also known as the Coinbase
          reward, were sent to this{' '}
          <Link to="/demo" component={Typography.Link}>
            address
          </Link>
          .
        </Paragraph>
        <Paragraph>
          A total of 306.51676953 BTC ($20,405,017.52) were sent in the block with the average transaction being
          0.33609295 BTC ($22,373.92). Learn more about{' '}
          <Link to="/demo" component={Typography.Link}>
            how blocks work
          </Link>
          .
        </Paragraph>
      </Typography>
      <div className="block_list">
        <BlockITem
          title="hash"
          value="00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa"
          action="copy"
        />
        <BlockITem title="Miner" value="Poolin" action="link" link="/demo" />
      </div>
      <Transaction />
    </div>
  );
};
const BlockTitle = ({ title, tips }) => {
  return (
    <div className="typography_title">
      <Title level={3} style={{ marginBottom: '0' }}>
        {title}
      </Title>
      <Tooltip placement="right" title={tips}>
        <InfoCircleFilled style={{ marginLeft: '0.5rem' }} />
      </Tooltip>
    </div>
  );
};
const BlockITem = ({ title, value, action, link }) => {
  return (
    <div className="block_item">
      <div className="block_text">
        <div>
          <span className="title">{title}</span>
        </div>
      </div>
      <div className="block_text">
        <div className="value">
          {action === 'link' ? (
            <Link to={link} component={Typography.Link}>
              {value}
            </Link>
          ) : (
            <Text copyable={action === 'copy'} ellipsis>
              {value}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};
const Transaction = () => {
  return (
    <div style={{ marginTop: '2rem' }} className="transaction">
      <BlockTitle
        title="Block Transactions"
        tips={
          <>
            <p>Block at height</p>
            <p>662463 in the </p>
            <p>Bitcoin blockchain</p>
          </>
        }
      />
      <TransactionItem />
      <TransactionItem />
    </div>
  );
};
const TransactionItem = () => {
  const loadMore = () => {
    console.log('加载更多');
  };
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7}>
              Fee
            </Col>
            <Col xs={19} sm={19} md={17}>
              <Text ellipsis>223.214 sat/B - 55.804 sat/WU - 224 bytes</Text>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7} className="md_none">
              Amount
            </Col>
            <Col xs={19} sm={19} md={17}>
              <span className="amount">2.69738115 BTC</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7}>
              Hash
            </Col>
            <Col xs={19} sm={19} md={17}>
              <Text ellipsis>
                <Link to="/demo">c7f3c833da17c2cfe64753c200c713c1b5806dbe3080d5e0e5293a6b7b0679fc</Link>
              </Text>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7} className="md_none">
              Date
            </Col>
            <Col xs={19} sm={19} md={17}>
              2020-12-22 15:09
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7} className="md_none">
              From
            </Col>
            <Col xs={19} sm={19} md={17}>
              <Row>
                <Col xs={12} md={10} sm={24}>
                  <Text ellipsis>
                    <Link to="/demo">1JFyG4gDcCip3tboQaUZct4vrBqybUYvd7</Link>
                  </Text>
                </Col>
                <Col xs={12} md={14} sm={24}>
                  <div>
                    <span>2.69788115 BTC</span>
                    <Tooltip title="Output">
                      <Link to="/demo"> 🌍 </Link>
                    </Tooltip>
                    <span className="sm_none"> ➡️ </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7} className="md_none">
              To
            </Col>
            <Col xs={19} sm={19} md={17}>
              <Row>
                <Col xs={12} md={12} sm={24}>
                  <Text ellipsis>
                    <Link to="/demo">1JFyG4gDcCip3tboQaUZct4vrBqybUYvd7</Link>
                  </Text>
                </Col>
                <Col xs={12} md={12} sm={24}>
                  0.03043553 BTC
                </Col>
                <Col xs={12} md={12} sm={24}>
                  <Text ellipsis>
                    <Link to="/demo">1JFyG4gDcCip3tboQaUZct4vrBqybUYvd7</Link>
                  </Text>
                </Col>
                <Col xs={12} md={12} sm={24}>
                  0.03043553 BTC
                </Col>
                <Col xs={12} md={12} sm={24}>
                  <Text ellipsis>
                    <Link to="/demo">1JFyG4gDcCip3tboQaUZct4vrBqybUYvd7</Link>
                  </Text>
                </Col>
                <Col xs={12} md={12} sm={24}>
                  0.03043553 BTC
                </Col>
                <Typography.Link onClick={loadMore}>Load more outputs...</Typography.Link>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
BlockITem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.string,
  link: PropTypes.string,
};
BlockITem.defaultProps = {
  link: null,
  action: null,
};
BlockTitle.propTypes = {
  title: PropTypes.string.isRequired,
  tips: PropTypes.element.isRequired,
};
export default BlockContainer;

import React from 'react';
import { PropTypes } from 'prop-types';
import { Typography, Radio, Tooltip, Row, Col, Result, Button, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { InfoCircleFilled } from '@ant-design/icons';
import { useDemoStore } from './demo-state';
import { translationCurrency, getRandom, toUTCString, getVlaueSum, absoluteHumanTime } from './utils';

const { Title, Paragraph, Text } = Typography;

const BlockContainer = observer(() => {
  const demoStore = useDemoStore();
  const { blockData, currentList } = demoStore;
  if (demoStore.error)
    return (
      <Result
        status="404"
        title={demoStore.error}
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    );
  if (!blockData || !currentList)
    return (
      <>
        <Skeleton active />
        <Skeleton active />
      </>
    );
  return (
    <div>
      <Typography>
        <div className="block_head">
          <BlockTitle
            title={`Block ${blockData.height}`}
            tips={
              <>
                <p>Block at height</p>
                <p>{blockData.height} in the </p>
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
              onChange={(e) => {
                demoStore.setUnit(e.target.value);
              }}
              value={demoStore.unit}
              optionType="button"
              buttonStyle="solid"
            />
          </div>
        </div>

        <Paragraph>
          This block was mined on {toUTCString(blockData.time)} by <Typography.Link>Machao</Typography.Link>. It
          currently has {getRandom(0, 10000)} confirmations on the Bitcoin blockchain.
        </Paragraph>
        <Paragraph>
          The miner(s) of this block earned a total reward of {translationCurrency(getRandom(0, 67774), 'BTC')}{' '}
          {translationCurrency(getRandom(0, 67774), 'USD')}. The reward consisted of a base reward of{' '}
          {translationCurrency(getRandom(0, 67774), 'BTC')}
          {translationCurrency(getRandom(0, 67774), 'USD')} with an additional 0.16583560 BTC ($11,039.78) reward paid
          as fees of the {blockData.n_tx} transactions which were included in the block. The Block rewards, also known
          as the Coinbase reward, were sent to this <Typography.Link>address</Typography.Link>.
        </Paragraph>
        <Paragraph>
          A total of {translationCurrency(getRandom(0, 67774), 'BTC')}
          {translationCurrency(getRandom(0, 67774), 'USD')} were sent in the block with the average transaction being
          0.33609295 BTC ($22,373.92). Learn more about
          <Typography.Link> how blocks work</Typography.Link>.
        </Paragraph>
      </Typography>
      <div className="block_list">
        <BlockITem title="Hash" value={blockData.hash} action="copy" />
        <BlockITem title="Confirmations" value={getRandom(0, 10000)} />
        <BlockITem title="Timestamp" value={toUTCString(blockData.time)} />
        <BlockITem title="Height" value={blockData.time} />
        <BlockITem title="Miner" value="Machao" action="link" link="/demo" />
        <BlockITem title="Number of Transactions" value={blockData.n_tx} />
        <BlockITem title="Merkle root" value={blockData.mrkl_root} />
        <BlockITem title="Version" value={blockData.ver} />
        <BlockITem title="Bits" value={blockData.bits} />
        <BlockITem title="Weight" value={blockData.weight} />
        <BlockITem title="Size" value={blockData.size} />
        <BlockITem title="Nonce" value={blockData.nonce} />
        <BlockITem title="Fee Reward" value={translationCurrency(blockData.fee, demoStore.unit)} />
      </div>
      <Transaction />
    </div>
  );
});
const BlockTitle = observer(({ title, tips }) => {
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
});
const BlockITem = observer(({ title, value, action }) => {
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
            <Typography.Link>{value}</Typography.Link>
          ) : (
            <Text copyable={action === 'copy'} ellipsis>
              {value}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
});
const Transaction = observer(() => {
  const demoStore = useDemoStore();
  const { blockData, currentList } = demoStore;
  return (
    <div style={{ marginTop: '2rem' }} className="transaction">
      <BlockTitle
        title="Block Transactions"
        tips={
          <>
            <p>Block at height</p>
            <p>{blockData.height} in the </p>
            <p>Bitcoin blockchain</p>
          </>
        }
      />
      {currentList.map((item) => {
        return (
          <TransactionItem
            key={item.hash}
            changeUnit={demoStore.changeUnit}
            item={item}
            unit={demoStore.unit}
            setExtend={demoStore.setExtend}
          />
        );
      })}
    </div>
  );
});
const TransactionItem = observer((props) => {
  const { item, unit, changeUnit, setExtend } = props;
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7}>
              Fee
            </Col>
            <Col xs={19} sm={19} md={17}>
              <Row>
                <Text ellipsis title={translationCurrency(item.fee, unit)}>
                  {translationCurrency(item.fee, unit)}
                </Text>
              </Row>
              <Row>
                {/* <Text ellipsis title="223.214 sat/B - 55.804 sat/WU - 224 bytes">
                  223.214 sat/B - 55.804 sat/WU - 224 bytes
                </Text> */}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7} className="md_none">
              Amount
            </Col>
            <Col xs={19} sm={19} md={17}>
              <span className="amount" onClick={changeUnit}>
                {translationCurrency(getVlaueSum(item.out), unit)}
              </span>
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
              <Text ellipsis title={item.hash}>
                <Typography.Link>{item.hash}</Typography.Link>
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
              {absoluteHumanTime(item.time)}
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
              {item.extendInput
                ? item.littleInputs.map((input) => <InputBase input={input} key={input.index} unit={unit} />)
                : item.inputs.map((input) => <InputBase input={input} key={input.index} unit={unit} />)}
              {item.extendInput && (
                <Typography.Link onClick={() => setExtend('input', item.hash)}>Load more inputs...</Typography.Link>
              )}
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7} className="md_none">
              To
            </Col>
            <Col xs={19} sm={19} md={17}>
              {item.extendOut
                ? item.littleOuts.map((out) => <OutBase key={out.n} out={out} unit={unit} />)
                : item.out.map((out) => <OutBase key={out.n} out={out} unit={unit} />)}
              {item.extendOut && (
                <Typography.Link onClick={() => setExtend('out', item.hash)}>Load more outputs...</Typography.Link>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
});
const OutBase = observer(({ out, unit }) => {
  return (
    <Row>
      <Col xs={12} md={12} sm={24}>
        {out.addr ? (
          <Text ellipsis title={out.addr}>
            <Typography.Link>{out.addr}</Typography.Link>
          </Text>
        ) : (
          'OP_RETURN'
        )}
      </Col>
      <Col xs={12} md={12} sm={24}>
        {translationCurrency(out.value, unit)}
      </Col>
    </Row>
  );
});
const InputBase = observer(({ input, unit }) => {
  return (
    <Row>
      <Col xs={input.prev_out ? 12 : 20} md={input.prev_out ? 12 : 20} sm={24}>
        {input.prev_out ? (
          <Text ellipsis title={input.prev_out.addr}>
            <Typography.Link>{input.prev_out.addr}</Typography.Link>
          </Text>
        ) : (
          <Text ellipsis className="COINBASE" title="COINBASE (Newly Generated Coins)">
            COINBASE (Newly Generated Coins)
          </Text>
        )}
      </Col>
      <Col xs={input.prev_out ? 12 : 4} md={input.prev_out ? 12 : 4} sm={24}>
        <div>
          {input.prev_out && (
            <>
              <span>{translationCurrency(input.prev_out.value, unit)}</span>
              <Tooltip title="Output">
                <Typography.Link> 🌍 </Typography.Link>
              </Tooltip>
            </>
          )}
          <span className="sm_none"> ➡️ </span>
        </div>
      </Col>
    </Row>
  );
});
BlockITem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
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
// Transaction.propTypes = {
//   changeUnit: PropTypes.func.isRequired,
// };
// TransactionItem.propTypes = {
//   changeUnit: PropTypes.func.isRequired,
// };
export default BlockContainer;

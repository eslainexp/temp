import React, { useState, useMemo, useContext } from 'react';
import { Layout, Row, Col, Tabs } from 'antd';
import { useWallet } from '@solana/wallet-adapter-react';
import { CardView } from '../components/card';
import { ArtweaveContext } from '../../contexts/arweave';

const { TabPane } = Tabs;

const { Content } = Layout;

export enum ArtworkViewState {
  Metaplex = '0',
  Owned = '1',
  Created = '2',
}

export const DashboardView = () => {
  const { connected } = useWallet();
  const art = useContext(ArtweaveContext)
  // console.log(artContent)
  const [activeKey, setActiveKey] = useState(ArtworkViewState.Metaplex);

  const artworkGrid = useMemo(() => {
    return (<><CardView arweave={art.artContent} /></>)}
  , [art]);


  return useMemo(() =>
    (<Layout style={{ margin: 0, marginTop: 30 }}>
      <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col style={{ width: '100%', marginTop: 10 }}>
          <Row>
            <Tabs
              activeKey={activeKey}
              onTabClick={key => setActiveKey(key as ArtworkViewState)}
            >
              <TabPane
                tab={<span className="tab-title">All</span>}
                key={ArtworkViewState.Metaplex}
              >
                {artworkGrid}
              </TabPane>
              {connected && (
                <TabPane
                  tab={<span className="tab-title">Owned</span>}
                  key={ArtworkViewState.Owned}
                >
                  {artworkGrid}
                </TabPane>
              )}
              {connected && (
                <TabPane
                  tab={<span className="tab-title">Created</span>}
                  key={ArtworkViewState.Created}
                >
                  {artworkGrid}
                </TabPane>
              )}
            </Tabs>
          </Row>
        </Col>
      </Content>
    </Layout>
  ), [activeKey, artworkGrid, connected]);
}


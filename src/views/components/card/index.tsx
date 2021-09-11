import React from 'react';

import { Card, Image } from 'semantic-ui-react'

export interface IArweaveData {
  readonly name?: string,
  readonly symbol?: string,
  readonly description?: string,
  readonly external_url?: string,
  readonly image?: string,
  // readonly properties?: {
  //   readonly category?: string,
  // }
  readonly seller_fee_basis_points?: number
}

interface IProps {
  readonly arweave: IArweaveData
}

export const CardView = (props: React.PropsWithChildren<IProps>
  ) => {
    const { arweave } = props
  return (
    <Card>
    {arweave?.image && (<Image src={`${arweave?.image}`} wrapped ui={true}/>)}
    <Card.Content>
      <Card.Header>{arweave?.name ?? ''}</Card.Header>
      <Card.Description>
        {arweave?.description ?? ''}
      </Card.Description>
    </Card.Content>
  </Card>
  );
};

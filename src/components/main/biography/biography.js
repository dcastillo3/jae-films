import React, { useContext } from 'react';
import { Text, cardProps } from '../../styled';
import { useMediaQuery } from '../../../hooks';
import { BiographyContainer } from './biographyStyledComponents';
import { CopyContext } from '../../../context';
import { ContentfulDoc } from '../../common';

function Biography() {
    const { copy } = useContext(CopyContext);
    const { isDesktop } = useMediaQuery();
    const biographyContainerPadding = isDesktop ? [5, 8] : [2];
    const document = copy?.[0]?.fields.artistStatement;

    return (
        <BiographyContainer $variant={cardProps.variant.background} $p={biographyContainerPadding}>
            <ContentfulDoc document={document} />
        </BiographyContainer>
    );
};

export default Biography;
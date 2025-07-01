import React from 'react';
import { useMediaQuery } from '../../../hooks';
import { BlogContainer } from './blogStyledComponents';
import { cardProps } from '../../styled';

function Blog() {
    const { isDesktop } = useMediaQuery();
    const blogContainerPadding = isDesktop ? [5, 8] : [2];

    return (
        <BlogContainer $variant={cardProps.variant.background} $p={blogContainerPadding}>
            Blog content will be here soon.
        </BlogContainer>
    );
};

export default Blog;

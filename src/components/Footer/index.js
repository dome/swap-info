import React from 'react'
import { Flex } from 'rebass'

import Link from '../Link'

// todo: change link
const links = [
  // { url: 'https://aelf.io', text: 'About' },
  { url: 'https://sashimi.cool/files/SashimiSwap_protocol.pdf', text: 'Docs' },
  { url: 'https://github.com/SashimiProject/sashimi-swap-info', text: 'Code' }
]

const FooterLink = ({ children, ...rest }) => (
  <Link external color="sashimiswapyellow" fontWeight={500} fontSize={12} mr={'8px'} {...rest}>
    {children}
  </Link>
)

const Footer = () => (
  <Flex as="footer" p={24}>
    {links.map((link, index) => (
      <FooterLink key={index} href={link.url}>
        {link.text}
      </FooterLink>
    ))}
  </Flex>
)

export default Footer

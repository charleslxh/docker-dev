'use strict'

module.exports = [
  {
    _id: '56e7c1d0fac0b77f5594ea80',
    poster: '56e7c1d0fac0b77f5594ea70',
    comments: [
      '56e7c1d0fac0b77f5594ea90'
    ],
    title: 'How To Set Up a Firewall with UFW on Ubuntu 14.04.',
    content: `
      ## Introduction

      UFW, or Uncomplicated Firewall, is an interface to iptables that is geared towards simplifying the process of configuring a firewall.
      While iptables is a solid and flexible tool, it can be difficult for beginners to learn how to use it to properly configure a firewall.
      If you're looking to get started securing your network, and you're not sure which tool to use, UFW may be the right choice for you.

      This tutorial will show you how to set up a firewall with UFW on Ubuntu 14.04.

      ## Prerequisites

      Before you start using this tutorial, you should have a separate, non-root superuser account—a user with sudo privileges—set up on your Ubuntu server.
      You can learn how to do this by completing at least steps 1-3 in the Initial Server Setup with Ubuntu 14.04 tutorial.

      UFW is installed by default on Ubuntu. If it has been uninstalled for some reason, you can install it with \`apt-get\`:

        $ sudo apt-get install ufw
    `,
    createdAt: new Date()
  }
]

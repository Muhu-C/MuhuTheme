hexo.on('ready', () => {
    const { version } = require('../../package.json')
    const logo = `
    o     o o    oo o     o o    oo ####### #     # ####### #     # #######
    oo   oo o    oo ooooooo o    oo    #    #     # #       ##   ## #     
    o o o o o    oo o     o o    oo    #    ####### ####### # # # # #######
    o  o  o  ooooo  o     o  ooooo     #    #     # #       #  #  # #
                                       #    #     # ####### #     # #######
    `.replace(/#/g, '▉').replace(/o/g, '◼')
    const message = `
  \x1b[38;5;45m========================[ Hexo Theme - MuhuTheme ]=========================\x1b[0m
  \x1b[38;5;45m${logo}\x1b[0m
                               \x1b[38;5;45m Version: ${version}\x1b[0m
  \x1b[38;5;45m===========================================================================\x1b[0m
                  \x1b[38;5;45mGitHub: https://github.com/Muhu-C/MuhuTheme\x1b[0m
                            \x1b[38;5;45mAdapted from: Solitude\x1b[0m
  `
    hexo.log.info(message)
})

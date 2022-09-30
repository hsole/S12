export const getIcon = (team) => {
  switch(team) {
    case 'JDG':
      return 'data:image/webp;base64,UklGRvQCAABXRUJQVlA4TOgCAAAvOwAGEB7JkSS7tuIBr6vPU1bgv3//nPvOuzgwe3bKgxs4QrC/wVI24lmBCsiRJCmS9Ndj4b3H3N1VSXVSOWjbSJCDgH7r7P7BoW3btDO+bcQ2K9tJZdtpXzrbtm0nZVrbtm2bZwJq7L8ja0zx9DFUrbF9PDSbuFcaNRPRxrasQtv+s1bgv7EkiNwtpDulSFUaQAwABncz0yL6Y6+x5rbf5PXfq2ag8YKLvJMpivgMCc4vlz6pYHUJA7Axo0qjKqMaV0X0KFXlkueuxl3V4+FW9XCrdR/fjoMDynerfrgrQ5aTWJJr9vk7lqbP9Inx1oSryJ4zxCHXx4eqarpCjMH8TpKduPG57GkFRQ5CDDYeicLuRxpfn6yHATgaQwSkj0S236HnQWzUpGhftLuJdmT3iQIQ2wJmkH1k99WrV8iOxm+iNHVw5Marm0R2+0G0u4n2RANGcnVvIPZ9MHCzryHTzR5sVhql8epnDyW81mlIuiH5L6E0pr8nlJgXRDZ7IMqWNVAf2noWJO/TfiIjmD3Jzb7e+jzE0dskHDFV53VllTxwFm0/wh1szsqACfR3VEfynhLvmQwOHGXbE0pMFXvWiV3gvIbUGL+RfeKYI3nXCRQ2+Lmlc7386C/DuG9KZdZxfUxiNcFNXf4euqqhmI7sOkG6l/ksrKqkrhNNS8/vYSbhavYE28EVYDlEhmxcs/+B0h2WQcqBZWm8J7K5A0fZ9gQZwaUTOQ/S2Z7gOufg66jpKwt7ye8kwdqeaYTG9LNU49spYAZKljhOdx/Iu0v2DtF3bJzaFkXjxKY+oXVBsFuzg77ZvuWqAzYHO4IdPH2H1gsOpzqoU6t9q4O+1YUhZMKxIrpiumL03dH9jk1cP3GNTsXou0aqDnauzwhGDHeMvjumK8KExQbkyfLGq5+4cqnVKo4+GuxveJv/Ooe4HiMbAiD7myzetV4jKjQOud7QdA2Vtk9r3BVV+828rfRvOK8rfzwF1mQ=';
    case 'TES':
      return 'data:image/webp;base64,UklGRuIBAABXRUJQVlA4WAoAAAAQAAAAOwAAGAAAQUxQSNkAAAABgGPbtmnp/F+27arIcWVGpMhWG2wrYwccVWQ24Edl27ZxCvfeN/65HYiICQCt6g4MW4GsUZuIlwmStCOzx0iCyFXkHiZT029D4W4rUjHbqPAikdIxKr6ntKxsg9Icfg8XVVdVdXRXVVUX9n/iCi3UBIGOHoCuLvhMfpNjzo4gWwpBUsusl/qCA9Y6pSMWquGRdUUpm+PNK6UEQywfjgZI69+LvdrRgmCxWKDeJDII9Ld45zoSOH//e0D0BRnTEL3hBUtAzhl0B9wCSU3fo4xevGSB+BCbaNAqAFZQOCDiAAAAsAcAnQEqPAAZAD4RBoJBIQd8BABBKAHgl8A/E/9ct4B+meIBfN/x0/gFcAfwDpAOAA/Rb0YP1g+ADyMweLeR5A2zjTDBQAD+/6tYj/+NUP//6pCyzZ/TXhLNRIVa16p9v/YgiRH//63OC+n0vzdR6PUM30GasOG/d/zI3LRn/tE///6nVJ2Z7zYtP+GajyNtE3475/YHXroHVcNlcFj/BC+/Hz/72K//tCP/x3QatMIcJT2VuzZH8lZqco1Z64tQP/3Q//eTX/9oR/+MaCdbNOXWALa+we/+KV+ZwBJciwAAAA=='
    case 'EDG':
      return 'data:image/webp;base64,UklGRiIDAABXRUJQVlA4WAoAAAAQAAAAOwAAGAAAQUxQSL0AAAABgFtt27LmrXA6hyHcvWQOSUrr3GUZDh2HGeLu6dw9qZC3Cv9zngkiYgIEbqo2Ln77f1fNYYuwuybu9P/HWQ9XaF0H34kzZd7V6FeZJ/Suxr+SLK51Re75SCYUu8hhugO92Ciqih6haMBaFBewa4pfWIeiD1OKP1iX4gp2S9GEtSmGYeMUlkfQu5NCZkFrwunZgRwHSST+BfjJCW35y9BPRYiTewaOc0LtW3wZ4H0tKOy2kdZ1R7u37XGn4AEAVlA4ID4CAAAQDgCdASo8ABkAAIAIJaQAThrn0e8fq1nAPrL9y/FXeAPIV/SPyOyQH+E/IDVLP6r+OGuz/xv5HfzP3zv4z8TfUv8Mf4j3BP4x/I/69/Xv2H/r//h+oDzQPZV/UlLi7PP5cB/wz5ifRhYtju8cturz55jIewR7kNgAAP7/q1iPzkaUTf/gtmdB2TyVyMIe+Z7lf/7yhZrj3S042BKQiRPQwlEZ2FBF4+nuVCd1OyNEwN1QtXg2vhbP1xrBGqwFd4tS2/N0dDsN0pcRICf+YbwU3A/+Oa0xfR4V2lJs0mW06/Qa2OIB8LHi1i/Hco67XefqqN7yQq5NP9oH9nlVkboQRV0K/FDCzyN83b0c0eHnv0W6qW7//2GonUzkvnyN+j6fUsBrwliKcHIJO7jkL8q6SoeDZsnQ+S4oL/2v/1d5ks6GFrJDBhamv+zUXY2PKOOlnlK/49JK4K0JG9S5unV0qFXcKcWYmzwGBN7e5jf/zwfGMYnjMBJLpBNWLKBOJbomy7rtKx8TJHaaEGBwVGoNy/g//VbQXu/+MdTlLEoPjdAOf/82HrSKe449J+icaeGCDmJlVMQA229X3DeDmUM3RTuiEnpB81HcWZfcgwQtEvu+7YUCTSupAPO3Dce/p13xoQzVyFMAeqvbZUEH76PP2Tov94VVcXgWxCoi6jUH34QUg/e6lacFiZ25nwdXH+CS0c4j8NodhuNgNS5WRvwSTFRcF4fWy3ETxtI2j7AIBdm1aXNo43UvnvTAAAAA';
    case 'GEN.G':
      return 'data:image/webp;base64,UklGRowBAABXRUJQVlA4TIABAAAvOwAGEBq4sW2rbnbpiuidpwLU7ocHVyPFx8yOXYDHEWPMpo0kSebPYKPL9qm9O4yOGkly5GzmINn3mc4+C0cAAAJRtrG1uUZzMub2Jjc1Nbv2pma7zbNdH7A728fIbdtItD37dT7hWlT3qqdicilt2Ib/xbg3qv9y1Khs2DuaVBNVbJa0H3Qb2HDC0+DE4UsUnQ27JYAND4fhWSfvJJtvaDaw4gTHAA/AR8q9eGqGlU/gM3ADaOjN5n0JVfsi+Ifje3Uc3RKLbjA7n7UUwS5A2UADn6KofnSLvnh7R10EWzaQwf1TBFVj0lyR3fhAK2b77rZ4LoSqPm1qDGVACneTAYX7q6pNqnZeBG/gdRx8BHI7oGqrqu+2/wheLhySTcPOlVf9toBrYAagGF72ouqW+697BDoAtKOaK/tfA1dAGzc7zw9Fp8z/XGGRTXfTVyVw+RA7e/n/yXdXc59AHT077Qc91WIGvgPXsPimqkzAO2Daw2zvxgeqKg9gFfDdEQM=';
    case 'T1':
      return 'data:image/webp;base64,UklGRpACAABXRUJQVlA4WAoAAAAQAAAAOwAAGAAAQUxQSIgBAAABkAPZtmlb81nftm3btu0f2Y5s2zYy22ZkK3y23xvBPle7/s8jYgL0f1+a8NnOX/HTpCXfv3yM2evOCqydJl0AOOlO0DZbNkgHAT6VckeakWHD7z6qcxGzszxsvOl7VmpMbJzHMUmZ8blG1rOF5Sse+Yu5XZ4XadW5YRWPK9doVW9xDhDZLkIaNGaH8S6PF6Smby8dPXrM/cMPp+sOwDA5XjcGyKv5N2fgcWb9GQCnAhz2AuyVtxsunj94yFB3Z9avlQl8zyuzH8CnPF6T8s4c2quP61FF9R1gmMyiv4228mHxx7ibUHYxwDE5HgXYKJ8GT718bt3GTZs2bVpzYVArgD8lHQYCfC7uG0l5ejeqW69e3R7h+mD0lxnxCchoI59XSsCx6kyAPTL9DgBsk4XV9iempzGpPsCHfA59AT5F2CCVLlu2TNgro7fMQn+BrA6ydyvAHpmBRwE2yt42AH9LOTRJBr7ks6haHGT3kGOFVEhtIZsnwk65nAdrZPeypwVdaenlCMv+7VZQOCDiAAAA8AcAnQEqPAAZAACACCWwAyjlBfgH4gdfpk3kv4LfsZ/RuSb7AfsBagMEA/1X+A98DomdKS9jzyZAa//xmoMhp9QmPT6/zU5AAP7+R4f//81guLeb4MTnHtxq96/bgB2lE/5uPh7Jdf+HlEZtY/elfs/+bg5hnTMUgAAq/8VV///uZHRztsUlfMFqp2whkkf5VuNr6fCmnmUDvP/B3f8nf0Hj/xCYrVSlekxLPfsU0KnilJfac0Ewa+Q7aub46psr0mc8apMLUq46LabNLgk9JaYFkLyFUEhaWrMTmy3Dfo/WAA==';
    case 'DWG':
      return 'data:image/webp;base64,UklGRvwCAABXRUJQVlA4WAoAAAAQAAAAOwAAGAAAQUxQSIYAAAABgBoAgILocHd3hwG8uVYSiQFIRJpLYwIancYEJKpn13d33O7ap4iYAHBVTkIAUMXHb9b3CQIa3tZ6vx9GQFdbH6+bIGOUPtanfpXZMDmn63OXQYiS6/Nz//jCj2e9RCACosrvSX9VGYDb3Dih6QDQY6KDA5MYBqBITb2u34t0gKqioAXXBVZQOCBQAgAAsA4AnQEqPAAZAACACCWMAI8A/WbgKP2gqWbpL/Vr9jMtt9O/GD8mdJT+QH5AZbh+DviZ/iBykX47cbP1AP51/LfyS/sHwM5wPlH+6/lj9Av8R/kf9v/Jv+6///6AOog/VxLjjryP0t+FVf51l95yjy5eBbowYzB4DFlcK10AAP7/o+tP//OVqkQjp1KXI1veAS7L/+oowWbiFTcXhl/sA8Wtkepg9nEtspDWJtbNuGjH6gjyGeemoMwQzB/ua+kVApHB1GArCjQzMf9Uw0nYY4HsUiDUqK05WGxqYoEu0SWFWXjX7/wDZln/+RFoaf/4KTwSA7PNGJvA0W5B265hhprYh8EAhDjD95kVcmadcQ5tuToGwHfzwsOL6uT//py0/4mMIMcy/hs5ZH6b9n6XUf+u7By67kXTrMQr6tAWNxqy9fpdcrrzJM/dJ9rRJ0UyazcbeY9Wc9iEde8q47WjIF4e1FH4nduCFVzT6R3dDDxjxUgoJwptotCHNOHsycphEZbb6ispfL5GelQPCd7/5WlWUp9/FlwuP/i/Ik909//LnYH+RgVsf9GKrR///4aYxfcCgFU+WT8NnuuHMHHlp7v5+FwD2qLA0xfgCZyRo4UPQuazx8S7kbZbmV6IlaAHp/qSQEdpbFF4AEdD2TM1LmsFVPZHX/+7rzT/zidD6Rj13Xs/xg3YMcYAbucM+RAjPuGlLHTZUY2aIYPJwenU5tKb/3PFMq65u/+mGZqPon/yzCZV3cX4z1QBkfbdlXbVJ///4Yr7tKv/5ickAAAAAA==';
    case 'ROG':
      return 'data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAQAAAAOwAAGAAAQUxQSAoBAAABkLpt2/n3yp8hLjlZ0a5bsm3btu0t2ck20pq9n23buMPXzzciJoCk775z+9PbJWuSR687+PMfAFr5KWcuJyuSqwCG2Vk5kaCzAIqZKSoTESk1NvYLwJaX0ML3c7VO+QL77NRv3k1Oe4/IBAAIZebwqDvwDADiMwFc8rJeTx6A8LB6AG6cVIuzb0O0+yywysmi4TfEfO36AtBmFA/xx9OAbD5WLyRA2hH2VNh0Q9LJHsCLTY9ET+qANjaO3yV5XgH0sqFaSYYrgCw+dEMCjxs41GJkIl5cNeBAnJ3FqY4AYol3kKiyMMCXuAcK+RdTh2sd4u8M4Fb8LlJJLq1wmTIxokRyqm/qYUCyBVZQOCDqAQAAUAwAnQEqPAAZAD4RBoJBIQd8BABBKAHgH8a/FX8gOiS2b7V/ibiEqpg6IDrK/Qd/YD0qvYy/Z39gPgA/TMsIDlj+0nuCfxn+W/4L8zOMg/SVBHAKnwzLBnOvF1VB85a8mjHJbNdby2H7TgAA/v+j60//9rmQ5iO8pa39bdOZ+2OHPHogp7b55DHyXvljddFGtF/XUM9tu9/HGv2WpT+K++9INqdIPmpePv/7MIf/wuha//wiGpc6mzrZloqbsVIH//+DUSM8Lz/n6jZAK/+XjgAcD3Y/65JnpOHLzIpSyf//+RWgKXG/u/xMbv3bKk3FBNoPNxy//dB8wHmYrWXaeL4//3j0lRPT1CKEtmGx3XeWXUoP7W6XlmZ/oywrfIb3Q7RYdQ8Cq8z/hMHw6dDDoCST4rTwjP5bE/+8ze5DdH/Ms83f/b9nS4BUqwXfFkg4/17E/8Wp0aUFgxx3/+j/xf7l8Sy29YhVtUvxrr3ZcN2/h7gu4DMb++ErSpkq3xF8e6f9f//Oa//AHH/9dZ/b4PpGbH+CP/5d1Hv5a955LlWJO4IivwN0rq0xhnoo7/9vcL/STKOw/qM6rbGwSuFlObBjPILMTiz48KTD2nTT7w9y/3ChFEhx76PHPa/G1zXTAw6YhUR0MAAAAA==';
    case 'G2':
      return 'data:image/webp;base64,UklGRrYCAABXRUJQVlA4TKoCAAAvOwAGELXIuW3b2J712V+czradWr1t27Zt2+ls27ZtVrZ13j9wYzvZVcAokiRFuXx83zN3/k0sjIAcbduOPfpju8+R0ui1gRxpbaczSieVbWcNNmf6OabzzA7s65oA9/QhBNZhzDnnYAQ2IdR5oBKgN98gCwIO0r34khBh0gMgNSrfT2JthHdQDmXwthqewuj8gDR7UJ8b72B9BCNgRHxXC1UAocke9JXCO5gF4+JG3IIJID2qPMKgOUiApXh4E5fgH+kMLsZbmAhhBRJNeZHrzX5ELuLzKS82xElwBx86DRpgfozP50hcvPci3w4kw116nIfSSDiIDxzCESAtwIwID5Bix3kTCXs/msMYOIj74DZKX/eDGwctIDPCoTdRELAMnW1wBnaFjjAMLqJ0Cd91gV9zoQNCjzMNT4txDm7EO7gCXx3D49gUFk3cnDiBi2EZwktT0JYMb+I0WI3zcRGewQ7w6sTiqoYuL/ZNzoFbmAqhwxBUh/FjKd7BGbASJ2AgzMZNsG5i9c5of8d93No5G+7g/wj8hFozXkwnx+UofZ8C++HtKOgE7RfqZYx7qJmwBKVVmBK9mLUCUxVR0knsARdwHtzBzbA54PzCmcEFUBFOo6RqCDNWIMqHVzNRUnc4g/VgAB6C/TAWy8AQaAqS5qIfryHaioOCGPw5gdJu7AnncR7ugTfT4DiOgp0oncLY/IViCNiF7ux4HaXxMAO0GTaBlsA36QbmQuhzlmGrLOo8/O0JS+AgHID10B/O4jlQRYQdZxoi4Lw+Foc1qN7QCFrCANAGLAqNEC4h0paDRLgDE+EO1Ez8rV2YFN/BAyQ76xAPx+9i4QGUDmNcfAenXiRCwL4PEXAQB79If+IjHPkQ6TwShjLzvy2+ygYw4jwVSuANvIVS90wB';
    case 'C9':
      return 'data:image/webp;base64,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';
    case '100T':
      return 'data:image/webp;base64,UklGRiYFAABXRUJQVlA4WAoAAAAQAAAAOwAAGAAAQUxQSFQBAAABkLNtmyHWA5rYnW3bdtLZVmV3tm2jSp1jV6eybdsnzm72K3bO7sxExAQg0gp2DZfe7e7v/315ttFeGbFts74FErfPO7GkXb0LMl/7s6O2xoHsVwGsKI8fAf7HvYe7OHjuzYZSKwfiLy1eygjpRK1ui+BqTu/xKz3U/H8BAHA9LgpIrBM/+Vd0xAEAT0thEwDgIEvLb/n2mTjtvl8AgghPy5IX8UtXOQDYuieA9Lu00oD84YsODVrBArkXFoj+OLkdFwY83xETQhjQvUMMohlIFYhxPgycBeJvTGkp25Zx8nget65EyfPiFsjn+3/gEhDlFyBZuLF6AMLzUtdnmKsqtH5LOly10iyY7ig/twXi7+GIdt2rXy8WMi7jjtWklwy+AfzvLERdwcjHECGXZyKZWwUK9P7r+0TWp0wFxK7ByUNJf1eNENOqURv39jHc4zE7RUQaVlA4IKwDAADQFgCdASo8ABkAAIAIJZgB3s/QPyA/FWsouwHmA/Sv/M/1XfTesA9AD9gPS09hP9pv25+AT+Of0q7cfoH0gdkz1c9Qv3I/smZDeZfjn+WHsAbpj+Z/iX+NOcL/HP67+N35K7ID+Qf3n8bONn6kH85/zf25e8H/H/cz7Hfwn+bf5n+q/AH/GP5H/X/63+y398/9/1AeqX9VfY8/ThMdroVmm+YmgQfTQWq+T5pr9hCLGqa+YoTB/gEHEaZ0PuKLAAD+/6tYj/976+JjByQkzgSoCLbLsPoObMOZlW3wLt3S3Kqyp88L/2gWYL+v5++m/AEeoJv1kMsc/3ZMP7+Pj0WMBY/0ColuJ50VTpUn5Qe/Ouwi3wKBKU8f//zusFzfjlZKAdBZ9i3KuvKy2lzG7MMCPrJ4v52eF+iaRuIzBodSM/juD5ZL4Rs40f0z3YJ4kZt+0a7RbfxMAJf//71z2q3T9P3LIahFf/kNPuc3UoPsBjZehLUUfwf1CFOc+cbv/7gjWTPqTH7gRnACToB9YDH//9LD/aP7Oaj9X+BXCyklYf27tQqs3ncxqQ5Lf9wmJ2E1U/8bg8VqyT0LcFwphMdlyKb9X/qkeUb1BwpwpIMqEMg/Ps39CTCgYuNi+HWkj6R0FfJBmzO2wYXi05nTzwgdBvbOI3xjrI/HxkiUCMuvnu/U7/OONbxZ5VRcommnIMN//5dlBS/+q1MdnzjASsl3OUn9FVGCvZpL0IEFrwqFhYuO3dWeSjjsl72y5HJTP/mp85V9//TkYaXvsrvCzy+f/iA/ZETQwmytyXowHoC62sid5bMXHTyf+L1FGonuY6fPTYsZTlG8dPVcVf8itKJjCUVVWJxES/45gXbBp2t39//tUeb8aN//+pUb3WrR0NVlJ+rnUKRzbh0M+3Ei/gkWzTyE5oIHLry3xbMoK77/ibedZv//CnuyZVCJ+YnH2uL+grxm4xBOrD20XYUFZEer9xMYl7LHQCK4WLMZHdkCYQbR/910vZoEMSffrKWc//6Az5J2NNW1w9RCDO/fV/FgAa5Ah0xFtbyMmHKI0f7Qd8n3+ewM+G/3yURb1Ui6TRO/+bbQf48i2CyKY8x3nUt+PcwvIVgB8//16IWou7u9zXyOWyEDdQlZV/d33/rP2E395skNZ0gZBdr/5h3bWJAvaG19Rmy38MuRFH/Qzy7JKct/+f/WfvzuFrgLLXgfWyHVsl+a3jHkj+I9hjAPOd7hl1sPOT/BFB+8IAAA';
    case 'CFO':
      return 'data:image/webp;base64,UklGRlIEAABXRUJQVlA4WAoAAAAQAAAAOwAAGAAAQUxQSNoAAAABgGPb2rHn+eN0tp2UKTMCm5NwOk0iKe10am2zs22bN/zyfvebQERMgOjpmd17O5jnIwZ0yJnG7/OFzmQRvQDGOn8BMBxJ1QMAB2d/YYLJ5/qH5scgojH8f4rH6U7BgxNND1T2WXD4bUHtUThD1AuUJxOMQ/08QY4ORQSyqGzblqFeWaswliurpXC7VfQeSCH5ikqFtOvHQdu5tjFhdZgBgOFNTQvuNCJx19i6hsaHdKEOuL2f0XAdLuR2K7jof/hl3U34W3B09aNDDJn8AuA5SwxqWfZaYSt6AlZQOCBSAwAAEBUAnQEqPAAZAD4ZCIJBIQYDAAQAYS1ADvx+q8OfvGYywqNsB4nP6V9gDygPUd9R30APKx/Wb4J/2G/Yf2ebQA7K7wD6tftjlrPrn5AfkdwgHkK/s2SBfEP5F+QGqFf2P8YPUz4xD+vf4f8jvZ6/RvyA9Sny1/nfcC/hf8W/qn9b/pP+g/sf/u7gD2Cv1DYbPanFFI46bseLHUkjWaPq4312ryx9fO7waNzjzQv7+KYAAP7/v7wL/8dXIGYZND26wMjwbd4j/dWY6s224ox92WR6iJ3Fggo28QB41AF/Xjr6vug7lPvMa2GqgKR1QH5/4HQTXaJJLse6FbvMDNa9zrnxEX+8M9Bs5gZtAP+f//XVHbiutulDhBlULPJyaW9wCQQt9XITrPUuT+hUK6TOgikLiHc8Qb0/vVa+//peO8977k9rOCPg9/+jO56n2ULR7H2KnP/9rDJLFKaBoCD/PxH7ueC8kD8lH14mid8/yYm/Gk+nMTO6bXWpr688Aecu9x/5neYYe3AZTdXr96/1LPQJyNB/1/1KNr3qbEC4g6cr1D7lt2tJ7zyTuEyhsmfXQsTyoy3bBp8wfwBGvAN9Jo4pwCo4Mlcbp4e4HGAPy4TWHrrMDGvCD/+XLjOmuZXnJOy2EZgZqeMkYusg+9kk8Lv83W3LLr/OIh1FWrGKA8JMpcIujzNrz6Sq5c0gwUdDbb5tPJ8Ei+4v5kfYKjlkoQQ5U3U5RoTRxbLm9x0BjXkA6YP+QRCtcYHlg1V1J32L3ecY+Oe4FJBvC98bVzJ/UqQA2lMF1cV45QyCCfzqwsdiLd+GXnNCQrLCBB7RToc//+/5QfeblQvjfWHfvoH/uIVaEXXAR+z4gBhw1dx25X6wcPfLMbp7yAaYxtSMqjP4PuvAWtEELCrCcBWJbaT9l6fgZ+pQaJoT//5doO3/x0DLiSgf/5wHIIHP9jC+KcHcE1LpeYv99Fr5bOLzFM3bKpUacUlksEjCLvRFoZ6FpDFW7s3m8pyihwaxQAjHfVPQV/k1V/ulI2q70nvr6S+JYIH6aaWXAPT8f1s5NJkNTCfkZdz2ERYRskQCX/7/E/6SmJUF/82xps+iXJjDuyUxgKJj3x6ijjZSujCC/HMNAAAAAA==';
    case 'MES':
      return 'data:image/webp;base64,UklGRkwCAABXRUJQVlA4TD8CAAAvOwAGEB45sm2rttL1356futw99/fo9Qk55/26tenAxt0id4eIYuHuTuTuFmtEICAo/o8mx40kKXK0/wsVtcd8cAAAIJjMRuZl27Zt27Zt2/XZtu3Ltm17ArJFV3ZS1ueJyhbB18V+ngFmxMZGzOmxdWSbjhXnHDEMYTWZvVHrWjExYP9sxf0RAVawB/nGBw28DRN/ydU4wFqJHU4ITQv7WaPEmgJQSyT25+qWk86U5kQ9p46BAlc+ZhcSuwnAFiSxU9A1h+gxI3xKCLu4gWBXekUyR6xkvnZJCsDuJYntNg4RiW27qvcYUGFC94n9imRYTf4XhH0U7OylJLbnEtRYyPMkqspG2Lf0gOQqCHucg8QW1/qt57xLkdhyt3//pH/S0/ORbC3d7nF72Y8k2ZZ8893YVwBTF7H9L7Kz9lLirI86U6FifqbFrhyvaWcstVR6QGJfn+DOig0FWMFe2cBzNjdhZyhMZEnMCtR00kpq6LiaF24glAR2eVSGRYC0NXD7KNV35xmgO4Slj442e9zU2AXebr9bpKv4OUrir+sR3E7vybqAumZll45Jhyo42P5DpItThpxwYnFVX1/ZxV4k6WflpeN36WaMXgN2CDZXGrsA25G05XilUQmHu2OgGbXPE9VrYIW7UFiiJT15ekiypOfGjFyZ9Ub+knZmJXYlqSVi1x0DXRQQvspWUQqz8JIUbEzx7LFwA/nowl8xMQiWnqwiwbLHgArb1qw3MtpNSgJn5kjmPAPMTC9F25Zn6wA=';
    case 'RNG':
      return 'data:image/webp;base64,UklGRhIDAABXRUJQVlA4WAoAAAAQAAAAOwAAGAAAQUxQSBABAAABgJtt27HniW1UOdJ5gQxgozRa2+yyhDawbds2f/9/F//I9+J5vwUiYgKAeufxnvhwz/N9KRwwtUbsOhQFxfEHn+1AMdqX+BgLxCjO4LTkhaCjaHC94mNMQFg8PVRINVvlne5S7ryThhBsbaFVqsUK6NN/CUoEAGiisHG0I4P/NEGB00wRtvR4ST5VE95FgU4jT3Gi1HKCXlmlG+QE8xz0AuV+kh6X1/6vj+A0STVLOJ2Qet1AxEapBpAsJH2nWrv+d0EY21h6krpfXNytAPC+JhgNL//f9hEMRvqLMIBaElGDoGAwVgAEvbG8i3McANAhG2M+QIRSGC3TrjtAD4MGYf/lmfEtEiDmQvFM+bLHAFZQOCDcAQAAkAkAnQEqPAAZAACACCWMAgwen7wPfX9wGQA5nLoAOtm9ADpcm+A4V/nNf3fl0+c/976qu+AfscdHOkcw5+ebruqcx0p820Sz1ygxGBwHjXLgVU08AAD+//8DY39y/dLYAcn674/5TP23qkQHUsTaQ/SPY1Qm2v/2n4j+I/xy59l5Vgcc/8pePg7X/LySLf7MgnxTrr4/4Ry62q2DSc+U+Fzp9EdgB3dmugYE/Ka1qoa6KS22NJ5XihmDsJJBP9nftsr+0Nr6m9We/tfHBvgptt+K4ezQVM+ybrIpMiHkxCuEDbznxK66TCSbOzaqWlYzc1vI45UlxmdABFf/iEKd1X+/ado6/vElUDYeur2qN6BL19U/6W2uu4wMKLpnPou9C+/wTvPFREUHGaZWTEsvZzD1U+/5tfbZ/IxcxmUfpVUrYU0in+7oHnAKudsU/fkeUwPhTMzSOQyITyLhAsABLO6/lw4knUNhwSszz+J0ix7NP6nyTMtgd6ssMbIz+xY2mLF7tj/fmGNpzUym6R/72FitivpUCGnj/mgmLqhOARrl2rFM1bey2qcmePKJHmsMLBuQaNAHuLkGD0HjDymhy7ekNDMPPEn7AdH0MtCpgz6m/6ByIKgEv6AAAAA=';
    case 'DRX':
      return 'data:image/webp;base64,UklGRgwCAABXRUJQVlA4TP8BAAAvOwAGEIfjqJEkR4qa8x7i4T4a7nczRcNRI0mOFN1z3nA5/ngOgntNl9tIkqQoe/k0Av+Nwgt0NO6dcVTb1rK897tbgh8Y2dghCimIQAZSWBMSMHR3l3cD9Hw9z0AAsPJj8MwLgtPppJzSrMgJ77G8ky2QvBkEgYS/IrBhgBGlvHDGJcVUqClirMRiDVW0CvCHJwRJyqukUKGs7QWgrGDTFAX1H3VYODFt9mfTFCed7+hej5X/43nvL5d9Mip/IqkISptebikgBAAIRVTyKTmYyEJvPPELdY1E/Hqf/TWlN6XPKYPW15Tx/hjjPHebiNZ0DwD262BwkNFpl2izvHCefVn/XQZtdtpvvJsOtofRDfj9XwQGdNu2jTfnQ2zbqG27N6n71bb5/j+TizHOyQNE9N9A2jbZ5uA3AR2WrUMhTU5uZDozOpPoRbLHhGy2mze7M0ZPUu9CI61fWH0KjaxHdy5+6WF8bOX80sFNrxJgG7/XXq21SpECWz25cbeWGiLBVk4vnJWUEUKyr8LWfq48RhyQNCxl189ufQBkXTkGIOxmE7Nv84QtPH4vkzVvjr/+LSh7gCRrdmdszx/zNAbaHxt4+FokUeY+duLlf4lCjH92+9PnPIFB/tkrY/fvFr4Sv5QRhIaFLiIszl02tsnaXF94tj/Kv8XOLp9t6LAAAA==';
    case 'FNC':
      return 'data:image/webp;base64,UklGRg4EAABXRUJQVlA4WAoAAAAwAAAAOwAAGAAASUNDUKACAAAAAAKgbGNtcwQwAABtbnRyUkdCIFhZWiAH5AABABgADgAhAA1hY3NwTVNGVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1kZXNjAAABIAAAAEBjcHJ0AAABYAAAADZ3dHB0AAABmAAAABRjaGFkAAABrAAAACxyWFlaAAAB2AAAABRiWFlaAAAB7AAAABRnWFlaAAACAAAAABRyVFJDAAACFAAAACBnVFJDAAACFAAAACBiVFJDAAACFAAAACBjaHJtAAACNAAAACRkbW5kAAACWAAAACRkbWRkAAACfAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACQAAAAcAEcASQBNAFAAIABiAHUAaQBsAHQALQBpAG4AIABzAFIARwBCbWx1YwAAAAAAAAABAAAADGVuVVMAAAAaAAAAHABQAHUAYgBsAGkAYwAgAEQAbwBtAGEAaQBuAABYWVogAAAAAAAA9tYAAQAAAADTLXNmMzIAAAAAAAEMQgAABd7///MlAAAHkwAA/ZD///uh///9ogAAA9wAAMBuWFlaIAAAAAAAAG+gAAA49QAAA5BYWVogAAAAAAAAJJ8AAA+EAAC2xFhZWiAAAAAAAABilwAAt4cAABjZcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltjaHJtAAAAAAADAAAAAKPXAABUfAAATM0AAJmaAAAmZwAAD1xtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAEcASQBNAFBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJWUDhMSAEAAC87AAYQdzFZ8x+K27aNk5Vz1s+iwVk0YhHJIBZjHmJIABa4wEU0AAbMZ2lEAsYYI5IAAC4cyLbVNC+xp/eOKWAqvv3v7xNQVhDR/wlAeD5eHdXdmA+5xpr8GHNXx9U4R8/l/Ky/9F1hRd+vPs/Lzi4vBoc4X5eOim/YBJOwb9ERxjaoQhVkx+h85jK1ugoLwIqrqo1rhh5X9WlaAUAtNAAtagCopqd6hRgTK3YAdsImiHlOOQIwEpxH9RBPyKd4xDSm3Dl2guOIHsJmjsyKRzwLyjPcZ8FFLMVb2OxPZsW7iGOoKfeAIWmAvaAeRqEom8QjaQRVDIqyHcEDo1ZQ9TZQdG7ghY2DatBPqulUCIByUKe9jOi8w0M7cHdwFMEt8bCVK7nFovDX8DfGfxVFu4XPEr7btr9mBJ8t/EdNT9Uhge8KocmhCgE=';
    case 'MAD':
      return 'data:image/webp;base64,UklGRq4CAABXRUJQVlA4TKECAAAvOwAGEPXIkW1btZX+N+ntOZuHnteBjbu7Q+Rk/Aj3iMwWTmTRJ/pVJ3oG0rYNKfrSm2nbhv9ZZ+MLBwIAQsg9sm3btm3btm3bbbZtTLZt27abgN7OYM4N7uWkADCpQmtiJF+SAwiLB4JeBWcJGunLDbBLu/zLbRWRjEthL+PiD5Z1+UkivytgWQaQolAkXf7kRc7l/pKsNMhVIYwG6FK6MjjAB8wFQrOBFVIk3zIsM8A0FoYrk/INScCpBUrvk64PQdqcdDdpZCTX70FoJAxB65OPp268lxKpbrBIIiHAIHtyxdAOREIm2LaUJJEf0JSDJHLEID6RBxmoAYcBQnmSVsABCKRBADSclszsRq7AC5oYjOGDc0B3GC3oEnBDaDVARqQKZDAc+UxA240Fxb6vIgI7oJJd6R9GxmVKM5bkKsxDiVYhX4lTscoEte9vqNgfbASDALK8S6pMS3cDz+lsWh7/VwHiceNEQGUQhjKQIH8SQJQJP4Mp27K8DqLAS+VP4Ad8cAaO+WA6ToNUxxCnKSBx28mpoN6PdAGmFiq/Afnfj9blGrVM8RykijCnJ9jnN8gmAUv5SJw0wJJXyb54OprlIOXADfkKVf2CDXNNjmQRmVUh7JY2uUcRLX1vj64CgoO0NCbO8cbPKrzq4ArDGiQQdRCpQgKkd1JxTj4id3MUSjvJTbcyWXKgfygGwiEELNpJlwPpSSJ5PWoBP0yyAToNjvIS+XErZgOA4P39RD6AcZhGEvKdyEOB1IAhtfInC1WM3dKcxInpgZHPjGx0N3sACEtwdztZyT6EMFIjv0dyxQZ1FXOJrIJHGDH6agh9Tf5RS3WoPTbInAbJBsPdwPNrZwkVQ5Ut5LUQ1KOzIRSsDfjgBP4gXSXbbGQl/N7mAA==';
    case 'BYG':
      return 'data:image/webp;base64,UklGRpIDAABXRUJQVlA4WAoAAAAQAAAAOwAAGAAAQUxQSHsBAAABkGXbtmk78+jZtm3bL7Zt27btpAA2/mzbtm07mcHjehWIiAlAeVs0OaKgYir+wy79pnfF8Bl3nyTzi9NCDClK3MYfJH+QPYpyHjTSFEIztn0iybVtyDn/OU+5WEODSPMm+3+Q5Nk6qsNvbgJsxjze4QGRDl2u8f+XowwANzlfq3f92zgdMvuwyNXe+D9jaMzq7x+qqBBqcqqI5ig65wrPpUFuwdUNJJtqNQa2irdp+oznIyHZ1vI32QhGm6e/7v3kSUcIv03WB2B3lrxnB+lbybqA0uUrH34OEreArAPkfuGZwNk1Y7yFdSFrwuUxb7sBeuj7cz08FUHJD1jddBMfRgIwW/CTPOYuCCk7q1b/8bU+AEwm+bM15Fq72Ro21zkWgD6JJBdrcpSVrx627cDNbvPH95j7k+RVS8h1ucL3AYee+S1h0S/yILrygOhfXVuw6F99IH3mXnXA+d9FHDWXph5LAeDUaNHFXw+8IN1hlor/Fef8XIj3DIZEAFZQOCDwAQAAUAwAnQEqPAAZAD4RBoJBIQd8BABBLQAZ86gvwD8K4AB/IPyA/ku8LbSr6AH8A6ZnrAPQA/U30Gv1V+AD9Q/9n/gPZNeKp7M8AC5T/JHsB/pV/meAA/SBBkJpp0LB78eWzBi+oRCoYf+57lAA/v+rULN/w2/xZQ63+//8kj+8Ucp6P9CBQHYMw9IFYBsQD1LgjvPub/PyTE83vLriKv+T3GcqLUO52zyXT/fxxcqNRZEmxPDZ0j+WfT6s1/2iKL44/IlO70Dg1aL9DBepPJ3ZHBH2jpNSZvVeYvAXSnAVomtSpkc+7p627BEcBv/9ByP5I19/EkOLLzQLgju//b+ro9ODjlXiLE/2Ggq5rYLv5l5cFqJ+0Kg5jgr2LhADsXx24wgsfLqlWn/rTomf8hxFAelbiWl3bIv9NFp3wy42Egud6KDwD52//4mGBu8zSCwUK6/+o2f/EXTEfS8drvHZkA8Rnk/CQDkOn79J6at9z/2M/x7m5NopXyU/0KNl9tby/TtL7JH4olr7P7tf+7u+//7ZZN/+CPHaL/NW9t2z/bw/QTH0Q///r4WwiIALu1QpNAa0Wvgo13h13l/VNgepmnZf6YE9crF9v8a4CbDVBEdwzvib402Sb1cisbFXBK78Is3JKhW2+NDf4q2AAAAAAA==';
    case 'EG':
      return 'data:image/webp;base64,UklGRjwBAABXRUJQVlA4TDABAAAvOwAGEI+hqG0kx1uuvI8/1dPSYNi2jSNeb7//tg8raNvI8a1/Gs+f42Ab2baS83FogEw7pj6H9Ie43gDvO4KgIFZAgBknDixRQognLx0QoIPFjTdKGFwQHrS4FEkAASy2KJFFCXfyq//f5u5dEygIHiUI6N4hgmwJbnFnyzdKEAUEcBhJtmmdeTa+bfvnn53/PyeBiP4zchspkiNg1ht8Qv4pmIldQZ1aDlLL8dDtTFY246mCYnw3GO+gFei6t/iI1lXVmKdoKr0IgLGmVQ64w52I7Ibho+ysaAIwEqPagNNoNvdyar7WV5Tw2kGOvJYoin8Q205WjxsO0Lb6bQgw0d9Xm4ftwAXKtel+Nj1HF+Xz2/qo9kW527h8V3ui33LSmUv1MqyqLIdUlkMW/w0B';
    case 'SBG':
      return 'data:image/webp;base64,UklGRh4FAABXRUJQVlA4TBEFAAAvOwAGEBXJzf5P8ZQibv+rszuzuLu7u7u7uxO5u7u7u7tH7u7u7vrFYZcG5qEJyqADSrgeKMDSe0jdJkdDQlIyqrg7IKMAipAsybZpWzX33te27Xuf7deybfv1bNu2bdu2bf7ImtNh27aBpEju/f4TvxRs247/sW37P3Rb6Z+3trZqs66i291GtG3b1qf3nAB+WwH1gDWAI4BHgB+AP4C3gA2AEs45oAlQC8jlbgaUAmYfg89jhaSmf1l2uSSpGqKzkB+zuUJyRnj0HLDpoNznVd6Fpf6FddyP7dy1C7ARMBlQ5Jb7gAVb5b7mpv/BKSSzJNcwiVw3no5jJJtW8S5aAOlYLsuYYGJXL9PqGkLEliSl0DK47JDwCTDLLYD2XdzLlFyakqxWnXT6NhgFHj3K+R/twKMODStVgDgDWRH7u+xfIVtVPuqUNVUQ05PwxucaQA9guWOAxW3MNDhzwJ1TTr6+x1WZ8qTf+9BfD/v7sM+x7j30zbB/I+i7KdLk7FYlkIX+XAo4CCjgHNAMOHoY/jsG2FvGEpP4ftur8j2lKhRz2C+xfxHXpa+StfY54TTIFJaibZABtgEGATMAN2Zx6Qjur1OAXMDFDCqNOaBa49Tb5LvTKV4jsb9iX0MfPPbPCEH/P4IcjxqeTsi3uYWQapxpYBqnHGahregMJE79A9xMpwqpqWNnq6oy6puqbINi39VTQT8POfIhTx7y5qHfJIy1E5YE05QzjSPt7SSUhCMy86wb56NDDwHjAM+zmwJa0qgGoQmqaI1ET8bcOdabx/6RYDcVYE/UFaOc/7CfI/R9Q+KTUJXEKbGqgKqLnUqIyTTkHIeHgCHOAOafgHdbIOrKCWKRgqRVFVeVU41BNQNl9SZHKzWseSoUyz48xsKjHPlY3z/CfD1yt5FsmCaEKkRMSPqjBFODcwpiwHTuLOBHVk5gJEVHHTlKu5Et8Z2KOVV1aq+aaxpvyp6kANvD/oyxXOrWoT9H0HdROsvLHy9G0niKj3b0o/ecBoazcNTHIcCrMhyPSO71aMc+cjX9vGtpQqsiOYUPUUpJwK6yPkZYF6JNC/s7wlgZT41R+kcZPOq4qDPG7DYVYnUMPgLGcIcBwy/As4kgGJLyogyNtvxR58hTGW36mMdkPU6BnBO0dcjZEfTfY38f9n2E2i6SJaWcRGEncYSqydkAAFcBvdxxQAdg/TF4M5gLFTnJA0WMPlJmzDsjHgQdOyXKEqmDzAePsWasy9HHx5g8PyKi7RC9BpwB7ATMBFRwFwLyACMAawHHAHcXQhLekz4x7NOwDzEvRh0ptUnkltKWj3kwkkRSBbGM5FLAHkAZd7HvRdi+0shSBec7fRL6NGTfaGOO1CDk6bDX8cRKcimELsEVX+5qQBVgznb4FzI65t5h/yKMrVEHh36LMKZK0nQB77jLAc2n4VVs5MmJeWisG0O2RhuoX8JYMUqzdASAzW77DzjUmKNKyIZD9o7SYowlQ2+E/X2MUYe9ndSh5zzc93YZB/SdgI9xokNeRe0nejlqL7FPsq6OdTNkC2J65xC8euQ2QPEluFzYh7Zm6MfQj4/1dP7SL0MORkqd3OjPV7dxwLzN9v8XNira+tGufbRzj75AxqIxt8YrMoMgANZx138FrFwP7ATpGx7twked+UjhkX1V5ZyCe4Dh7uP3AId7gRB1o/QdufnovmqA0/ACMMjvRG/A6QuQbQXzBHsFgKeAbu4gAA==';
    case 'DNG':
      return 'data:image/webp;base64,UklGRtQEAABXRUJQVlA4WAoAAAAQAAAAOwAAGAAAQUxQSAICAAABkHVt21nHC3rqpmnHtu3JWe12bNu2bdu2bdu2M0c1k2w72/i+iJgA+Lx0t4u8Rtb+v9yzLGhnRmbIus/Xzlz7rJOzxoXR1fiX/GJA7LhlS5aNj+//VOZb0hSdmzdo3MjWpf3hV6rF0El9swtT6Gkq5iYvqgf3NRclZ6g4WtiPiqQppeBpxMQk4UcJShZbh8xk4HnwjD7WdXQwhU96NoG39QfekkqSa8Vxkb2T2nNcBFiuFeOKbcu1S+gd3bZtG0JbBLebsF4omuxqseD2AKFSJ266zLYe1PCCGOOUaMm75fJ0OUIILDFlXq3g4B4KWZ8w2/yoDFDjg3pgcHD1edNLB4H4ZPNjFmDeWdcg4rJlRaDfUeu3EgBz2zIPxBtK+Y0ATNbfLwc0+qto192kNc4FUCdb1YIU+8j67/jx48eLdK0BYLDpLy9MVInHjx8//tv6KoLQGr1rzRg4B23X6SZjsMbgehuhuJSUdj07dk9JCHOB8snJgQiNT+/VpV/H9PQkQgBKStcG14W3NUefU5UHlZvkbjOCvAiY1tmyC3SW+pOfOI71iBmVksuXoQRR2j8Jiyt5UH5h4i99HKjtJv7tML1/AwZAaP0+M9r/VvQFxVHZpgvt0uYsmrNwTrt250x5iaC69DLBWnBv95pd9/Kt0ppyoL365Jei1WqVXk+vBd8DVlA4IKwCAACQEQCdASo8ABkAAIAIJbADO6Y3+AfiBqhXAPwA/GCsA+Wj539t3sAcyr+QHUAeoD9Iv1N6UD3AP1V6wD0AP0a9QD+if67/EfAB+pH+59wD+TfzD79LyN+EFiZ/bngH6VH5+v9j9oHsd+Z/9b7gH8V/mH+P/MXsQPYw/ShLr3G2XTsrGE7BQeU0YKwxoAUwEcQw8hvsAAD+/6tSd/iWyelc19F4Cnind9/3yf+Z/F/m4/uiHYrWqpBOqr8LUfv7hgGc/82qdeK8tPhC+95Vvhmg50rUJkv0zETLDTGIuxTD/BwkaO3lmsaYNeBsN9jhKCdi16/0iA2QPAkZ+yfKRxrF8l1k5ZixDH2mUfIgNVTU4OM35f+b7Uf3423yWeqwuz6dqmuU5Q7T69tfCd+nkVIGm5GpzDIXOlRqWr5TLYg4PL1+8I/iwbDbHccTx00CkTId9TP/9KPL3TnapB5nhKFSQhrn11LEdgsBoXgZ0FlsReVZP90ibxOkVJT+l+ddbvOfxTL5/5DHBCil+jrswuOHoEpffi5KxBcLe8P/+0L0ShP2Jft2+Uh4L8bmaLWvuC/w/7yvzufj6SC2VXZMzi//1y/PfKRf/ndU4l99+wrn//ymf+z9x/MYFfAMeI+5bdwifEGL6TGih79BKBZPgLQ4IYXbQYnRsv5rKtQiU3s0ytb/+XTaY3F4i9ASLAEtR7WSZlsg70LFAMI1tSGkbuPtcCtTVHkVaRrEhxdjNTkpfYJT8N/H+Nj2VpbJUx9C+g0FR/q+2d94vz5sIk0GIuhW//UAxso9u93xXxiul/7rZP+i+gvqRkpV/Wn+oRY9qTgXXOBFvia/xzw/jasYLwKGBq6BU+9tSP/wgdOMqwp2oH/XyS5T+x3PXCwqVujf5Uxf/6qgQ+JpXcpoAAA=';
    case 'CHF':
      return 'data:image/webp;base64,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';
    case 'IW':
      return 'data:image/webp;base64,UklGRj4FAABXRUJQVlA4TDIFAAAvOwAGEA0oattI2rbzy/InPAeGiP5PgPr/Ym4BvQug8jhVFQe7FB/kgtN1wDaSrTYXEtJ/dQyRB3kvRfq/BraRbKc5sUJT/9W4BGaGSJFij9pGkpp7i4f+uyOiBhv0fwIAvzzjiMMkC6BdqA9CJd/xVQ88VG2YCiU/MATJgmfTq5Cg03TFIewhBmlgDh7uF+9L0ZFvw5QAsIeuDEsenjiECNBaABAtcm7bNrZnP/f5bNuxbdtGZTt9utS2bdtOKts2P+Pl877Pe7vg/oLdxmYlR7Zt1VbG2uf7x909hF5QtJJOEWno7n7vO1uKtW2LkN3P830zuEty3wGJ5JlNsALWQiXTae7tT+7u7jozr1RBAAiwuqHZZrW3aKNbzWi2F7fnzqZm8wPU3GxjAoAAvtHzIbhUs6GjnK9s4sFNLAJ/qHDxphNI56vmkMgIi4UO4LhKOhLNlsWP5rUP/GOPI+GRk1AM4mISHj4Zod+/bkpQPDLu4XteTSKVli23vvQ4SujfECWeRmFEgB6xfGunB3xHtV+efpDjFdiJnoCIOeEp0wSvMrMDYrYF73OO9JIAsO2+zQEGFVr2YGsu8+T9fvoHZGZkR9mFsgIIg8pC5iqfP3+mbe/twPMz59PArjJmuCWLdZLuyJSSuWUGkGSxH30mvBMX+Uxq2BStSuCOIlJzxyMeAoGkqzD4/ZQjFUoVwtvMiA1CoChS/W+31B+9+uvlAi8gEKThkKBi4J8aktol5ZEcP+XQ+Wf+Q81nmlG14NnKGEHr4KhGNjFJiQhJoABooZpAL8lHZGEbwKuSe0e+MCNuYCAprnQkcmuKm3nFnhCSGvrUmHdnO0CGWpKbW9yRhEjJzipC3ibL69JzEjczR2chVZFA/iIJqtUpQAkgzbm2Rurgmq0QnCX0JsHEnzhlD5ZSz2SBVTsWERqeBL9qAM4Bn63dTPZIfzSQrARE/K1vi658XufYZGNVcguM3n2rSWop3xZsfrlp19LDqP+ebzos+T+oaFpCUEkhnuUs/115jxnP7xPBWgKKV4K2tVeVM3vylnZh+1/8Jz2xB3svrVwHZFcjoGB04eXuZ2YqRuwae1iNqHVc5JH/Kp23YietagAEKAF6XevcLgE6if7dq+I0stSRW2oev6Y8iDSKFWqS4FE786+dGRQK4aNS83yn0lc/6nUPuqR5AeK1EsBLhE+iCWfuwTfNR6X7izGscvBMs7VLwacVs+qvsgVT7VlVDBJSCB+hVKHy8SGO8YkuAQAfgFdKAP80ukZCkGcudNodJYOUA1z8+9kmx2LALYtjzi7pzN1WqHD82AM4eAsNEuIq8F8JAsdJ3jt6YdQZ3MpjAowWrxKT1Q0sLLeCRu7Lbu9/FPB3XM7uWyTRHKeaWjij4QkJ4fKFHWBpPcoTvPgHspykQmeWLoj/A4w2T0wSEngkcV4R4C+iceA/efj9KEtX7Efu6jPW9e4NF47dl7/9Q+zao8PPOf2/z7MffSZzVLbKSOCfxNg/RUgNm7z/acKBx0vuMAt5dOE+cfGesF/DvGc7T/1n3f/Csv/OiWkWyRXYzCjDOnANoKwWloAD4Qdf1L9zZURZTOxKw0VOd1JWcrWl4kxWrYUyZYmSWrFqgSzvybAKUBf4D0yEHXwZaX13/1sp5jXhaFRJ6WvFJE9Bg5fMi/gGNaWvqWEImAL+K0QCRxCy9U6ni8k/CiTNOwsgJWFfJDMYMxrtww/v9gnBa8AxKr/51kWkaDXpqBCcJTjEa+qrTk/11n3BF4APgDcP';
    case 'ISG':
      return 'data:image/webp;base64,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';
    case 'LLL':
      return 'data:image/webp;base64,UklGRoQBAABXRUJQVlA4THcBAAAvOwAGEJkyRPQ/NhHR/3BAbCRJkRT+O32PC90O1GIHQbZN73V/rcESAMCUMmvbtp1tc+oiHW31kG3bdn2tDUVu2zZWT9lp+woIWeLzLKQk4ZnQaJ9K6oGSX2EExtQghFihAOgCJRNAAiwOsyTbDPAZAdLF3hDlv80AnT7gwyNBwjyXihLkpRkg0cLUTYoQQc6plgk7DoYYRL80BgS8wBcOYUJsUa4RCZaZZQ7GcdABfWkUDMBgASPEIrmiAG6YfTmk6TiwLE2ClHEgTawMGLEiAxlWmX2pMHTQDWthEtgMA+njgDFAGTwx+7JNDUMHzoVPD5V2lgCVkGeD2ZcUAwzRCw/QBe/MMcs6TmaY7jrQaKQDJsUWHyT89NJDfVrAdl209/hQXxc9WYEqZyAsVAgR3c8Da20UsiyDgBX4YNN2PWiyBl+gwzagBO6zBhWOQEb/qQLyskixCMJseuB1Hg57fJTZnVG6x0KcORDmUw2FP+JthvOiOQMA';
  }
}
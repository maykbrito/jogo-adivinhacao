function darDica(palpite, numeroSecreto) {
  if (palpite === numeroSecreto) {
    return 'Acertou!'
  } else if (palpite < numeroSecreto) {
    return 'Chute mais alto'
  } else {
    return 'Chute mais baixo'
  }
}

function avaliarTentativas(tentativas) {
  if (tentativas <= 3) {
    return 'Incrível!'
  } else if (tentativas <= 6) {
    return 'Muito bem!'
  } else {
    return 'Você conseguiu!'
  }
}

function jogar() {
  alert('Bem-vindo ao jogo de adivinhação!')
  const numeroSecreto = Math.floor(Math.random() * 100) + 1
  let tentativas = 0
  let jogando = true
  let chutes = ''
  while (jogando) {
    const resposta = prompt('Qual é o seu chute? (1 a 100)')
    if (resposta === null) {
      alert('Jogo encerrado. O número era ' + numeroSecreto + '.')
      jogando = false
    } else if (Number(resposta) < 1 || Number(resposta) > 100) {
      alert('Chute inválido: escolha de 1 a 100')
    } else {
      const chute = Number(resposta)
      tentativas = tentativas + 1
      chutes = chutes + ' ' + chute
      if (chute === numeroSecreto) {
        alert('Acertou! O número era ' + numeroSecreto + '. Tentativas: ' + tentativas + '. ' + avaliarTentativas(tentativas))
        jogando = false
      } else {
        alert(darDica(chute, numeroSecreto))
      }
    }
  }
  alert('Seus chutes:' + chutes)
}

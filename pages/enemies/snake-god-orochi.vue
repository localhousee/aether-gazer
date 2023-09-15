<template>
  <Enemy
    name="Snake God <Orochi>"
    image="snake-god-orochi.jpg"
    type="Visbanes"
    risk="III"
    description="A mature and coquettish woman with several huge, ferocious snakes lurking behind her, ready to strike at any moment."
    :intel="[
      `Once one of the five mountain gods that ruled over Sasanami and the object of the Miyahebi family's worship, she was sealed away a hundred years ago.`,
      'She was summoned and awake n by Miyahebi Syuu and has secretly been conducting experiments combining humans and Visbanes in the Miyahebi family manor.',
      'Arrogant and cruel, she likes to toy with her preys. She can use multiple katanas to launch a tidal wave of continuous attacks.' +
        '<br>' +
        'Additionally, she has the ability to command Visbane snakes. Orochi who came to the battlefield in the form of a a mountain deity, portends a calamity that will return to this land once again.',
    ]"
    :skills="[
      {
        name: 'Secret Skill - Hidden Snake',
        description:
          'Orochi appears before an enemy and commands a giant snake to launch a ferocious slashing attack.',
      },
      {
        name: 'Secret Skill - Heavenly Fire',
        description:
          'Orochi commands a giant snake to breathe fire at an enemy.',
      },
      {
        name: 'Secret Skill - Ten thousand Snake Slash',
        description:
          'Orochi unleashes several fierce sword blasts forward, dealing heavy blows to enemies.',
      },
    ]"
  />
</template>

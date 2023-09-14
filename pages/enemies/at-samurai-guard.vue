<template>
  <Enemy
    name="AT <Samurai Guard>"
    image="at-samurai-guard.jpg"
    type="Visbanes"
    risk="I"
    description="A humanoid Visbane born of Orochi's binding experiments, it represents an early attempt at this technology."
    :intel="[
      'Originally a samurai cultivated by the Miyahebi family who voluntarily underwent this unstable Visbane transformation procedure.',
      'Possessing only the most basic capability for thought, its only policy is to eliminate all enemies of the Miyahebi family.',
      'Wielding a katana as a weapon, it brandished it tirelessly, thinking only of winning or completely unaware of any wounds its receives.',
    ]"
    :skills="[
      {
        name: 'Blade Dance',
        description:
          'Jumps up in the air and spins once before landing and delivering a finishing blow to the enemy.',
      },
      {
        name: 'Sprinting Adjudication',
        description: `Charges at an enemy's position then spins to attack them.`,
      },
    ]"
  />
</template>

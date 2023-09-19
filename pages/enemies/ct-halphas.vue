<template>
  <Enemy
    name="CT <Halphas>"
    image="ct-halphas.jpg"
    type="Visbanes"
    risk="III"
    description="A six-legged crawling Visbane covered head to toe in Transzist ore. Its prototype was a hideous spider whose body was outfitted with heavy firepower AGI Mecha armor."
    :intel="[
      'A Cognizant Visbane that appeared in the Source Layer of the Neuhansa District, it was heavily affected by the industrialization on the surface. It has a massive mechanical body.',
      'Fully capable of thought and speech, its behavior is more intensely purposeful than merely driven by pure destruction.',
      'Its entire body is equipped with a number of frightening heavy firepower weapons. From the moment it enters combat, it will level the battlefield with its explode firepower.',
    ]"
    :skills="[
      {
        name: 'Firepower Suppression',
        description:
          'Halphas launches precise missile attacks, using firepower suppression to render the enemy defenseless.',
      },
      {
        name: 'Tracking Artillery Strike',
        description:
          'Halphas unleashes a tracking ray that confirms the target position before launching a powerful artillery strike.',
      },
    ]"
  />
</template>

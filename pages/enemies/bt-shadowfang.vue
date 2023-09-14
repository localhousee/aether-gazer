<template>
  <Enemy
    name="BT <Shadowfang>"
    image="bt-shadowfang.jpg"
    type="Visbanes"
    risk="I"
    description="The products of an animal thoroughly corrupted by a Visbane. Human data fragments were seemingly mixed in during the corrupting process, resulting in their beastman-like appearance."
    :intel="[
      'A species formed after an animal was fully corrupted by a Visbane that entered the Surface Layer through a rift.',
      'Their modes of operation are as bizarre as they are variable, and they uses their sharp claws as weapons to lacerate enemies with.',
      'While they do not possess the capacity for thought, they can act on their animal instincts and are considerably alert to danger.',
    ]"
    :skills="[
      {
        name: 'Roar of the Night',
        description:
          'Lets out of a deafening roar, dealing damage to nearby enemies and increasing its ATK for a short time.',
      },
      {
        name: 'Frenzied Claws',
        description: 'Strikes twice with sharp claws at an enemy ahead.',
      },
    ]"
  />
</template>

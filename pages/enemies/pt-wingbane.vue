<template>
  <Enemy
    name="PT <Wingbane>"
    image="pt-wingbane.jpg"
    type="Visbanes"
    risk="I"
    description="With a large head that strongly contrasts with its thin body, its single eye embedded in the center of its head emits an eerie light."
    :intel="[
      'Like the prototype of all Visbanes, their activity can be traced the farthest back of all Visbanes types since observations of them were first made.',
      'Capable of flight, they can attack enemies with their sharp claws mid flight, hence their name.',
      'While they pose a limited threat individually, their tendency to from a huge swarms and emerge from layer rifts like a plagues of locusts is what torments Modifiers the most after Quakes...',
    ]"
    :skills="[
      {
        name: 'Centrifugal Collision',
        description:
          'Flaps its wings and rotates three times at high speed before charging at the enemy ahead with force.',
      },
      {
        name: 'Disintegrating Ray',
        description: 'Charges up power, then fires a laser at an enemy.',
      },
    ]"
  />
</template>

<template>
  <Enemy
    name="COI <Zero One>"
    image="coi-zero-one.jpg"
    type="Humanoid"
    risk="II"
    description="An icy assassin who excels at stealth-based combat."
    :intel="[
      'Her true name unknown, Zero One is the codename of the mysterious woman who shares the roles of second in command with Olheim.',
      `Ethan, she was transformed and all of her memories of the past were erased. She has remained with the Children of Iron because of Ethan's promise.`,
      'Highly capable, she excels at whipping up all manner of traps, so her opponents need to watch their step when going toe-to-toe with her.',
    ]"
    :skills="[
      {
        name: 'Revolving Blades',
        description:
          'Zero One hurls two daggers at an enemy ahead, which explode on impact to deal even greater damage.',
      },
      {
        name: 'Intel Check',
        description: `Zero One speedily flickers over to an enemy's side and delivers a single blow, after which she immediately disappears from the battlefield, returning to a safe position.`,
      },
      {
        name: 'Flickering Blades',
        description:
          'Zero One launchers two waves of blade attacks that deal damage to enemies in their path.',
      },
    ]"
  />
</template>

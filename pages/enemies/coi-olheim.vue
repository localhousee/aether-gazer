<template>
  <Enemy
    name="COI <Olheim>"
    image="coi-olheim.jpg"
    type="Humanoid"
    risk="II"
    description="An disciplined youth that often relies on wholly unexpected methods of attack in combat."
    :intel="[
      'The founder as well as the previous leader of the Children of Iron, he was really more of a gang boss.',
      `After inadvertently learning that CORG has been suppressing Rostach, he was determined to lead his poverty-stricken companion to CORG's doorstep to take back what was rightfully their.` +
        '<br>' +
        'However, the streetwise Children of Iron were still woefully outmatched and outgunned by CORG, and his stratagems failed one after another.',
      'After being thoroughly beaten, it was meeting Ethan that revitalized his hope. He started to refer to Ethan as his brother and grew convinced that Ethan had the capacity to lead the Children of Iron out of the woods.',
    ]"
    :skills="[
      {
        name: 'Extreme Spinning Chop',
        description:
          'Olheim swings his two blades in a high-speed spinning attack against an enemy',
      },
      {
        name: 'Quick Chop',
        description:
          'Olheim unleashes three chopping attacks from where his stands, dealing damage to nearby enemies.',
      },
      {
        name: 'Hot-Blooded Roar',
        description: `Olheim's blood boils, increasing his ATK.`,
      },
    ]"
  />
</template>

<template>
  <Functor
    name="Elf: Galadriel"
    image="elf-galadriel.jpg"
    faction="Yggdrasill"
    :rank="5"
    :buff="{
      'Access Key ATK': '+20%',
    }"
    :bonus="{
      ATK: '+100',
    }"
    power="When Dodge is triggered, the attacker takes 15% more DMG for 6 seconds; effect does not stack.<br />Every time Extremity Dodge is triggered, the remaining colldown time of Dodge is shortened by 1 second."
    description="An elven princess that can talk to animals. While somewhat anxious when it comes to people, she always smiles unconsciously when in the presence of animals."
    :story="[
      `&quot;The strawberries over on that mountain are very sweet!&quot;`,
      `&quot;Is that so? You must be hungry. Huh? There's nothing to eat here.&quot;`,
      `&quot;Have I seen your son? I'm sorry, I'm afraid I haven't. Could he have run away from home? He is in his rebellious phase, after all.&quot;`,
      `&quot;Hello, you're looking lovely today, Miss Sika.&quot;`,
      `As she chats away happily with the animals of the forest, Galadriel doesn't have the bearing of princess whatsoever, looking instead like a bit of a wild child.`,
      `&quot;You've again abandoned your etiquette lessons to come here, Princess?&quot;`,
      `A weary-looking old maid says upon finding Galadriel in the forest`,
      `They're so dull...`,
      `&quot;There's nothing more important for a princess to learn than etiquette.&quot;`,
      `&quot;...&quot;`,
      `&quot;Why not learn the elegant language of the merfolk if you have the time to come here and talk to these forest animals? Think of your public image! Associating with these creatures will only-&quot;`,
      `&quot;Don't talk about my friends that way!&quot;`,
    ]"
  />
</template>

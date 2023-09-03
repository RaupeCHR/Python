import discord
from discord.ext import commands
import random 


intents = discord.Intents.all()
intents.message_content = True
bot = discord.Client(intents=intents)



@bot.event
async def on_ready():
  print('Bot ist online')

@bot.event
async def on_message(message):
   global last_greeting
   current_greeting = get_random_greetings()
   if last_greeting == current_greeting:
      current_greeting = get_random_greetings()
   await message.channel.send(current_greeting)
   
   last_greeting = current_greeting
   await bot.process_commands(message)
   
def get_random_greetings():
  
    greetings = [ 
      "!!Mach dich bereit! Es erscheint ein wildes...", 
      "!!Rette sich wer kann, auf dem Server landete gerade...", 
      "!!Leute was ist das? Ist das ein Flugzeug? Nein, ist es eine fliegende Kuh? Nein, ein ist ein...",
      "Oh hallo! Wir haben bereits auf dich gewartet..",
      "Wilkommen auch hier gilt das Motto, du kommst hungrig und gehts auch so ..."
      # " space for more greetings"

    ]
    return random.choice(greetings)

random_greetings = get_random_greetings()

@bot.event
async def on_member_join(member):
  global random_greetings

  embed=discord.Embed(title={random_greetings}, description=f"**{member.mention}**, Willkommen auf **Vanni´s Wolke** :cloud:, schau dich erst einmal um. :kissing_heart:")
  embed.add_field(name="Wir freuen uns dich auf unserem Server zu sehen.:grin:", value=f"Wir sind jetzt schon {len(set(bot.users))} Mitglieder :raised_hands:!")
  
  member = member.mention
  channel=bot.get_channel(1110622097241292802)
  await channel.send(embed=embed)
  


bot.run['MTExMDgxOTY2MjMzOTUwNjIyNg.GFvGrl.IZXoe4Z3XcAsVMe2HEfrFuCQs714o5eUomCz70']

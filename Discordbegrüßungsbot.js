import discord
from discord.ext import commands
import random 



intents = discord.Intents.all()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)



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
async def on_ready():
  print('Bot ist online')
    
@bot.event
async def on_member_join(member):
  channel=bot.get_channel(123456789)
  
  embed=discord.Embed(title={random_greetings}, description=f"**{member.mention}**, Willkommen auf **Wolke 7** :cloud:, schau dich erst einmal um. :kissing_heart:")
  embed.add_field(name="Wir freuen uns dich auf unserem Server zu sehen.:grin:", value=f"Wir sind jetzt schon {len(set(bot.users))} Mitglieder :raised_hands:!")
  
  member = member.mention
  
  await channel.send(embed=embed)

@bot.event
async def on_member_remove(member):
  channel=bot.get_channel(123456789)
  
  embed=discord.Embed(title="Machs gut war schön das du da warst!", description=f"{member.mention}, ist von der Wolke gefallen.")
  embed.add_field(name="Wir würden und freuen wenn du wieder kommst.", value=f"Wir sind jetzt nur noch {len(set(bot.users))} Mitglieder!")
  
  member = member.mention
  
  await channel.send(embed=embed)



bot.run('token')

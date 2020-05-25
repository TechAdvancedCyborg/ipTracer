from subprocess import Popen, PIPE
import re
import requests


target = input("Target: ")
p = Popen(['tracert',target], stdout=PIPE)
output=""
while True:
    line = p.stdout.readline()
    output = output+line.decode("utf-8")
    print(line)
    if not line:
        break

ips = [requests.get('https://api.ipify.org?format=json').json()['ip']]
targetip=re.findall("\[(.*?)\]",output)[0]
line = 0
for x in range(len(output)):
    if output[x] == "\n":
        line=line+1
        print(line)
    if line>3:
        break
output = output[x:].split("\n")
for x in range(len(output)):
    current = re.findall("\[(.*?)\]",output[x])
    if len(current) == 1:
        ips.append(current[0])
    else:
        try:
            if output[x].split(" ")[-2] == "Trace":
                pass
            elif output[x].split(" ")[-2] == "timed":
                pass
            elif output[x].split(" ")[-2] == "host":
                pass
            else:
                ips.append(output[x].split(" ")[-2])
        except:
            pass
ips.append(targetip)
ipsa = []
for x in range(len(ips)):
    if x == 0:
        ipsa.append(ips[x])
    elif x > 1:
        ipsa.append(ips[x])
    else:
        print("no")
ips = ipsa
print(ips)
filestart = open("sos.js","r+")
fileend = open("eos.js","r+")
startofscript=str(filestart.read())
endofscript=str(fileend.read())
filestart.close()
fileend.close()
mid = ""
outputjs=startofscript+"var pointList=["
for x in range(len(ips)):
    try:
        jsoncurr = requests.get("http://ip-api.com/json/"+ips[x]).json()
        lat = jsoncurr["lat"]
        lon = jsoncurr["lon"]
        asorg = jsoncurr["as"]
        isp = jsoncurr["isp"]
        mid = mid+"\nvar marker = L.marker(["+str(lat)+","+str(lon)+"]).addTo(mymap);\nmarker.bindPopup(\""+ips[x]+"<br>"+isp+"<br>"+asorg+"\");\n"
        outputjs=outputjs+"["+str(lat)+","+str(lon)+"]"
        if x < len(ips)-1:
            outputjs=outputjs+","
    except:
        print("Invalid...")
outputjs=outputjs+"];"+mid


outputjs=outputjs+endofscript
fileoutput = open("main.js","w+")
fileoutput.write(outputjs)
fileoutput.close()

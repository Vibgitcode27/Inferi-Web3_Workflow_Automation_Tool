"use client";

import { Blocks, Workflow, Layers, Code, Plus } from "lucide-react";
import { GlowingEffect } from "../(components)/ui/glowing-effect";
import { Avatar } from "antd";
import webhookImage from '../../public/cdnlogo.com_webhook.svg';
import phantomImage from "../../public/phantomWallet.png"
import alchemyImage from '../../public/alchemy-seeklogo.svg';
export function Features() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Blocks className="h-4 w-4 text-indigo-500" />}
        title="Connect Your Smart Contracts"
        description="Link your blockchain assets and smart contracts with just a few clicks."
        backgroundImage="linear-gradient(135deg, rgba(74, 107, 239, 0.1), rgba(138, 99, 232, 0.05))"
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Code className="h-4 w-4 text-indigo-500" />}
        title="No-Code Blockchain Solution"
        description="Build automated workflows without writing a single line of code."
        backgroundImage="linear-gradient(135deg, rgba(138, 99, 232, 0.1), rgba(74, 107, 239, 0.05))"
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Workflow className="h-4 w-4 text-indigo-500" />}
        title="Automate Your Workflows"
        description={
          <div className="flex flex-col items-center space-y-2 pt-10">
            <button style={{ border : "1px solid gray" , width : "100%" , height : "50px" , borderRadius : "10px" , fontSize : "19px" , fontWeight : "600" }}><Avatar style={{ marginLeft : "-5px" , marginRight : "10px"}} src={webhookImage.src}/>Trigger</button>
            <div className="h-8 border-l-2 border-dashed border-gray-400"></div>
            <button style={{ border : "1px solid gray" , width : "100%" , height : "50px" , borderRadius : "10px" , fontSize : "19px" , fontWeight : "600" }}><Avatar style={{ width : "100px"}} src={alchemyImage.src}/></button>
            <div className="h-8 border-l-2 border-dashed border-gray-400"></div>
            <button style={{ border : "1px solid gray" , width : "100%" , height : "50px" , borderRadius : "10px" , fontSize : "19px" , fontWeight : "600" }}><Avatar style={{ width : "100px"}} src={phantomImage.src}/></button>
            <div className="h-2 border-l-2 border-dashed border-gray-400"></div>
            <div className="flex items-center">
              <Plus className="h-3 w-3 text-indigo-500" />
            </div>
          </div>
        }
        backgroundImage="linear-gradient(135deg, rgba(74, 107, 239, 0.12), rgba(138, 99, 232, 0.1))"
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Code className="h-4 w-4 text-indigo-500" />}
        title="Instantly React to Chain Events"
        description="Set up triggers based on blockchain events and execute actions automatically."
        backgroundImage="linear-gradient(135deg, rgba(74, 107, 239, 0.08), rgba(138, 99, 232, 0.08))"
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Layers className="h-4 w-4 text-indigo-500" />}
        title="Multi-Chain Support"
        description={
          <div className="flex flex-col items-center justify-center">
            <span className="mb-3 text-sm text-gray-700">Connect and automate across multiple chains</span>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">Ethereum</span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">Solana</span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">Polygon</span>
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">Avalanche</span>
            </div>
          </div>
        }
        backgroundImage="linear-gradient(to right, rgba(74, 107, 239, 0.05), rgba(138, 99, 232, 0.1))"
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  backgroundImage?: string;
}

const GridItem = ({ area, icon, title, description, backgroundImage }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border border-gray-200 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={5}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div 
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 border-gray-100 p-6 md:p-6"
          style={{ background: backgroundImage || "white" }}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-indigo-200 bg-white/80 p-2 shadow-sm">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-gray-900">
                {title}
              </h3>
              <div
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-gray-700"
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

//  <div className="flex items-center">
//                 <Plus className="h-3 w-3 text-indigo-500" />
//               </div>
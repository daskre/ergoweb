import { FormattedMessage } from "react-intl";
import Button from "../Button";

function FormattedMessageFixed(props: any) {
  return <FormattedMessage {...props} />;
}

export default function Mining() {
  let miningPoolsUrls = [
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="666 POOL"
          id="components.mining.miningPools.1"
        />
      ),
      url: "https://www.666pool.cn/pool2",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="HEROMINERS"
          id="components.mining.miningPools.2"
        />
      ),
      url: "https://ergo.herominers.com/",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="NANOPOOL"
          id="components.mining.miningPools.3"
        />
      ),
      url: "https://ergo.nanopool.org/",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="WOOLYPOOLY"
          id="components.mining.miningPools.4"
        />
      ),
      url: "https://woolypooly.com/#/coin/erg",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="GETBLOK.IO"
          id="components.mining.miningPools.5"
        />
      ),
      url: "https://ergo.getblok.io/",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="2MINERS"
          id="components.mining.miningPools.6"
        />
      ),
      url: "https://2miners.com/erg-mining-pool",
    },
  ];
  let minersUrls = [
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="NANOMINER"
          id="components.mining.miners.1"
        />
      ),
      url: "https://github.com/nanopool/nanominer/releases",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="NBMINER"
          id="components.mining.miners.2"
        />
      ),
      url: "https://github.com/NebuTech/NBMiner/releases",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="SRBMINER-MULTI"
          id="components.mining.miners.3"
        />
      ),
      url: "https://github.com/doktor83/SRBMiner-Multi/releases",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="TEAM RED MINER"
          id="components.mining.miners.4"
        />
      ),
      url: "https://github.com/todxx/teamredminer/releases/",
    },
  ];

  let urlsComponent = (
    <div>
      <h2 className="mt-8 lg:mt-24 font-vinila-extended-light text-[40px] lg:text-[48px] mb-14">
        Mining Pools
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {miningPoolsUrls.map((link, i) => (
          <div className="ml-6 mb-10" key={i}>
            <Button
              text={link.text}
              url={link.url}
              newTab={true}
              underline={true}
              textColor="brand-orange"
              background={false}
              icon="ArrowRight"
              iconColor="orange"
            />
          </div>
        ))}
      </div>
      <h2 className="mt-8 lg:mt-12 font-vinila-extended-light text-[40px] lg:text-[48px]  mb-14">
        Miners
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {minersUrls.map((link, i) => (
          <div className="ml-6 mb-10" key={i}>
            <Button
              text={link.text}
              url={link.url}
              newTab={true}
              underline={true}
              textColor="brand-orange"
              background={false}
              icon="ArrowRight"
              iconColor="orange"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div id="Mining" className="max-w-[1300px] mx-auto py-12 px-4 lg:py-16 lg:px-4 flex flex-col lg:flex-row relative z-10">
      <div className="lg:w-1/2">
        <h1 className="font-vinila-extended text-bold text-[48px] lg:text-[120px]">
          Mining
        </h1>
        <div className="hidden lg:block">{urlsComponent}</div>
      </div>
      <div className="lg:w-1/2">
        <p className="text-[#989898] dark:text-[#989898] mt-8 lg:mt-16 text-[14px] lg:text-[16px] max-w-sm">
          <FormattedMessage
            defaultMessage="Ergo mining is based on Autolykos, an ASIC resistant Proof of Work algorithm written in Scala. It can run on most low-end GPUs at lower temperatures than other algorithms, increasing mining equipment longevity. Combined with the eUTXO model and shifting the heavy-lifting off-chain, this creates a highly efficient Proof of Work."
            id={"components.mining.text.1"}
            values={{ breakingLine: <br /> }}
          />
        </p>
        <p className="text-[#989898] dark:text-[#989898] mt-8 text-bold text-[14px] lg:text-[24px]  max-w-lg">
          <FormattedMessage
            defaultMessage="Welcome to the future of Proof of Work."
            id={"components.mining.text.2"}
            values={{ breakingLine: <br /> }}
          />
        </p>
        <p className="text-[#989898] dark:text-[#989898] mt-8 lg:mt-16 text-[14px] lg:text-[16px] max-w-sm">
        <FormattedMessage
            defaultMessage="To get started, check out the community-build Mining Handbook, or join the community spaces."
            id={"components.mining.text.3"}
            values={{ breakingLine: <br /> }}
          />
        </p>
        <br/>
        <Button
          text="MINING HANDBOOK"
          url="/blog/ergo-foundation/"
          newTab={false}
          underline={true}
          textColor="brand-orange"
          background={false}
          icon="ArrowRight"
          iconColor="orange"
          customClass=" -ml-4 mb-8"
        />
        <br/>
        <Button
          text="TELEGRAM"
          url="https://t.me/ErgoChats"
          newTab={true}
          underline={true}
          textColor="brand-orange"
          background={false}
          icon="ArrowRight"
          iconColor="orange"
          customClass=" -ml-4 mb-8"
        />
        <br/>
        <Button
          text="DISCORD"
          url="https://discord.gg/ergo"
          newTab={true}
          underline={true}
          textColor="brand-orange"
          background={false}
          icon="ArrowRight"
          iconColor="orange"
          customClass=" -ml-4 mb-8"
        />
        <br/>
        <Button
          text="SUBREDDIT"
          url="https://www.reddit.com/r/erg_miners/"
          newTab={true}
          underline={true}
          textColor="brand-orange"
          background={false}
          icon="ArrowRight"
          iconColor="orange"
          customClass=" -ml-4 mb-8"
        />
        <div className="lg:hidden">{urlsComponent}</div>
      </div>
    </div>
  );
}

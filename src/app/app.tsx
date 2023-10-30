import Logos from "components/atoms/logos";
import { FaBoxes, FaMoneyBill, FaUser, FaMagic } from "react-icons/fa";
import { SVGProps, ForwardRefExoticComponent, RefAttributes } from "react";
import Button from "components/atoms/button";
import Card from "components/organisms/card";

function App() {
  const features = [
    {
      name: "Inventory Management",
      description: "Effortlessly track and manage your inventory items.",
      logo: FaBoxes, // Use the component name without JSX brackets
      docs: "/inventory-docs",
    },
    {
      name: "Sales Tracking",
      description: "Keep a record of all your sales and transactions.",
      logo: FaMoneyBill, // Use the component name without JSX brackets
      docs: "/sales-docs",
    },
    {
      name: "User Management",
      description: "Manage user accounts and access permissions.",
      logo: FaUser, // Use the component name without JSX brackets
      docs: "/user-docs",
    },
  ];

  return (
    <main className="pt-4 p-16">
      <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h3 className="text-2xl sm:text-4xl leading-none font-bold tracking-tight text-purple-200">
          <span className="text-[gold] opacity-75">Welcome to</span> Your Fun
          Website
        </h3>
        <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-purple-400">
          React + TypeScript + Tailwind
        </h1>
        <p className="max-w-screen-lg text-lg sm:text-xl text-gray-300 font-medium mb-10 sm:mb-11">
          Get ready for a fantastic web adventure! This template comes with{" "}
          <code className="font-mono text-blue-500 font-bold">
            Magic Components
          </code>
          ,{" "}
          <code className="font-mono text-blue-500 font-bold">
            Awesome Jest Tests
          </code>
          ,{" "}
          <code className="font-mono text-blue-500 font-bold">
            Mischievous Husky
          </code>
          ,{" "}
          <code className="font-mono text-blue-500 font-bold">
            Commit-lint Wizards
          </code>
          ,{" "}
          <code className="font-mono text-blue-500 font-bold">
            ESLint Enchantments
          </code>
          ,{" "}
          <code className="font-mono text-blue-500 font-bold">
            Prettier Spells
          </code>{" "}
          and{" "}
          <code className="font-mono text-blue-500 font-bold">
            Components with Superpowers
          </code>
          . All set up and ready to cast their magic.
        </p>
        <div className="absolute top-12 right-12 opacity-10 lg:opacity-50">
          <Logos.Vite className="w-56 h-56" />
          <FaMagic className="w-56 h-56" />
        </div>
      </header>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 items-center">
          <a href="https://github.com/yourusername/your-project">
            <Button>Embark on the Journey</Button>
          </a>
          {features.map((props, index) => {
            const Icon = props.logo as unknown as ForwardRefExoticComponent<
              Omit<SVGProps<SVGSVGElement>, "ref"> & {
                title?: string | undefined;
                titleId?: string | undefined;
              } & RefAttributes<SVGSVGElement>
            >;
            return (
              <div key={index} className="col-span-10 sm:col-span-5">
                <Card
                  title={props.name}
                  description={props.description}
                  Icon={
                    Icon as ForwardRefExoticComponent<
                      Omit<SVGProps<SVGSVGElement>, "ref"> & {
                        title?: string | undefined;
                        titleId?: string | undefined;
                      } & RefAttributes<SVGSVGElement>
                    >
                  }
                  href={props.docs}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

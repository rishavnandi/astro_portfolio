import {
  SiAnsible,
  SiTerraform,
  SiDocker,
  SiGnubash,
  SiPython,
  SiCplusplus,
  SiGit,
  SiGithub,
} from "react-icons/si";

export const technologiesData = [
  {
    name: "Ansible",
    icon: <SiAnsible size={50} style={{ color: "#ff5750" }} />,
  },
  {
    name: "Terraform",
    icon: <SiTerraform size={50} style={{ color: "#7b42bc" }} />,
  },
  {
    name: "Docker",
    icon: <SiDocker size={50} style={{ color: "#2496ed" }} />,
  },
  {
    name: "Git",
    icon: <SiGit size={50} style={{ color: "#f05030" }} />,
  },
  {
    name: "Github",
    icon: <SiGithub size={50} style={{ color: "#888b95" }} />,
  },
  {
    name: "Shell",
    icon: <SiGnubash size={50} style={{ color: "#434345" }} />,
  },
  {
    name: "Python",
    icon: <SiPython size={50} style={{ color: "#fed140" }} />,
  },
  {
    name: "C++",
    icon: <SiCplusplus size={50} style={{ color: "#00549e" }} />,
  },
];

import { FaPlay } from "react-icons/fa";
import { TbSwitch2 } from "react-icons/tb";
import { FaBackwardStep } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import ButtonPlayer from "../../ui/ButtonPlayer";

function ControlsButtons() {
  return (
    <div className="flex items-center gap-2">
      <ButtonPlayer>
        <TbSwitch2 />
      </ButtonPlayer>
      <ButtonPlayer>
        <FaBackwardStep />
      </ButtonPlayer>
      <ButtonPlayer main={true}>
        <FaPlay />
      </ButtonPlayer>
      <ButtonPlayer>
        <FaStepForward />
      </ButtonPlayer>
      <ButtonPlayer>
        <FaRepeat />
      </ButtonPlayer>
    </div>
  );
}

export default ControlsButtons;

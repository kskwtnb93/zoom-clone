import { FiMessageCircle, FiPhone, FiCopy } from "react-icons/fi";
import { VideoTile, MediaControls } from "@/widgets/meeting-room";

export function MeetingPage() {
  return (
    <div className="meeting-container">
      <div className="video-area">
        <div className="video-grid">
          <VideoTile />
          <VideoTile />
        </div>
      </div>

      <div className="control-bar">
        <MediaControls />

        <button type="button" className="control-button">
          <FiMessageCircle />
        </button>

        <button type="button" className="control-button">
          <FiCopy />
        </button>

        <button type="button" className="control-button leave-button">
          <FiPhone />
        </button>
      </div>
    </div>
  );
}

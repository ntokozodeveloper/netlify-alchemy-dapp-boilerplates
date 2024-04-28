import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					create<span>-web3-dapp</span>
				</h1>
				<p>
					Get started by editing (Edited) this page in{" "}
					<span>/pages/index.js</span>
				</p>
			</header>

			
					</div>
				</div>
			</div>
		</div>
	);
}

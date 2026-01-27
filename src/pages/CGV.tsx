import { motion } from "framer-motion";

const CGV = () => {
    return (
        <div className="pt-24 md:pt-40 pb-16 md:pb-20 px-6 min-h-screen bg-transparent">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Juridique</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Conditions Générales de Vente</h1>
                    <p className="text-gray-400">Agence de Conseil en Communication, Création & Stratégie Digitale</p>
                </motion.div>

                <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">1. OBJET ET CONCLUSION DU CONTRAT</h2>
                        <p>
                            Toute commande de prestations (conseil, stratégie, création graphique, développement web, community management, production) implique l'adhésion sans réserve du Client aux présentes conditions générales de vente. Elles prévalent sur tout autre document commercial du Client, notamment ses propres conditions générales d'achat.<br />
                            Le contrat est réputé conclu dès la signature du devis ou du bon de commande par le Client, accompagnée du versement de l'acompte éventuel.
                        </p>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">2. PRIX ET MODIFICATIONS</h2>
                        <p className="mb-4">
                            Les prestations sont facturées au tarif en vigueur au jour de la passation de la commande ou selon le devis préalablement accepté. Les devis sont valables pour une durée de 30 jours à compter de leur date d'émission.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>2.1. Limitation des allers-retours (Corrections) :</strong> Sauf mention contraire explicite dans le devis, le tarif forfaitaire inclut un nombre maximum de 3 allers-retours de corrections sur les livrables présentés. Par «aller-retour», on entend une liste consolidée de modifications demandées par le Client en une seule fois.</li>
                            <li><strong>2.2. Facturation supplémentaire :</strong> Au-delà de ce nombre limite, toute intervention supplémentaire sera considérée comme une prestation additionnelle. Elle sera facturée au temps passé selon le tarif horaire en vigueur ou fera l'objet d'un devis complémentaire.</li>
                            <li><strong>2.3. Changement de brief :</strong> Toute demande impliquant un changement substantiel du brief initial ou une refonte d'une structure déjà validée sera automatiquement facturée en supplément.</li>
                        </ul>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">3. PROCESSUS DE VALIDATION ET LIVRAISON</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>3.1. Validation par étapes (Effet Cliquet) :</strong> Les projets sont découpés en étapes successives (ex: Stratégie &gt; Structure/Wireframe &gt; Design &gt; Développement). Le Client doit valider chaque étape pour passer à la suivante. La validation d'une étape est définitive. Toute demande de retour sur une étape validée sera facturée comme une nouvelle commande.</li>
                            <li><strong>3.2. Validation tacite :</strong> À défaut de validation ou de retour écrit du Client sous un délai de 5 jours ouvrés après la remise des éléments, l'étape est considérée comme validée tacitement par l'agence LOLLY SAS.</li>
                            <li><strong>3.3. Livraison et Recette :</strong> La livraison est matérialisée par la remise des fichiers ou la mise en ligne. Le Client dispose de trois (3) jours pour vérifier la conformité. Passé ce délai, et sans réclamation écrite précise, la prestation est réputée acceptée sans réserve.</li>
                        </ul>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">4. DÉLAIS DE RÉALISATION</h2>
                        <p className="mb-4">
                            Les délais sont donnés à titre indicatif selon les disponibilités de l'agence LOLLY SAS. L'agence LOLLY SAS ne saurait être tenue responsable des retards liés à :
                        </p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>La remise tardive d'éléments par le Client (textes, images, accès).</li>
                            <li>Un cas de force majeure (panne réseau généralisée, grève, émeute, catastrophe naturelle).</li>
                        </ol>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">5. ANNULATION DE COMMANDE</h2>
                        <p className="mb-4">
                            Toute annulation par le Client en cours de mission doit faire l'objet d'un accord formel.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>L'acompte versé à la commande reste acquis à l'agence LOLLY SAS à titre de dédommagement.</li>
                            <li>Les travaux déjà réalisés à la date d'annulation seront facturés intégralement.</li>
                        </ul>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">6. RESPONSABILITÉ ET GARANTIE</h2>
                        <p>
                            L'agence LOLLY SAS est tenue à une obligation de moyens et apportera tout son soin à l'exécution de la commande. Sa responsabilité est limitée au montant de la prestation et exclut tout dommage indirect (perte d'exploitation).<br />
                            Le Client garantit qu'il détient tous les droits de propriété intellectuelle et droits à l'image sur les éléments (textes, photos, données) qu'il fournit à l'agence LOLLY SAS.
                        </p>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">7. PAIEMENT ET PÉNALITÉS</h2>
                        <p className="mb-4">Sauf conditions particulières, les factures sont payables à réception.</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Acompte :</strong> Un acompte de 50% est exigé à la commande.</li>
                            <li><strong>Suspension :</strong> En cas de retard de paiement, l'agence LOLLY SAS pourra suspendre l'exécution des travaux en cours (arrêt des prestations, suspension de site web).</li>
                            <li><strong>Pénalités de retard :</strong> Toute somme non payée à l'échéance entraîne de plein droit l'application de pénalités d'un montant égal à trois fois le taux de l'intérêt légal en cours.</li>
                            <li><strong>Escompte :</strong> Aucun escompte n'est accordé pour paiement anticipé.</li>
                        </ul>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">8. CLAUSE RÉSOLUTOIRE</h2>
                        <p>
                            En cas de défaut de paiement, 48 heures après une mise en demeure restée infructueuse, la vente sera résiliée de plein droit par l'agence LOLLY SAS. L'agence LOLLY SAS pourra exiger la restitution immédiate des créations et l'arrêt de leur utilisation.
                        </p>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">9. PROPRIÉTÉ INTELLECTUELLE (RÉSERVE DE PROPRIÉTÉ)</h2>
                        <p className="mb-4">
                            Les créations restent la propriété entière de l'agence LOLLY SAS jusqu'au complet règlement de leur prix.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Transfert des droits :</strong> Le transfert des droits d'exploitation (reproduction, représentation) ne s'opère qu'au paiement intégral de la facture finale.</li>
                            <li><strong>Fichiers Sources :</strong> Sauf mention explicite au devis («Cession des sources»), les fichiers de travail (fichiers natifs .indd, .psd, .ai, codes non compilés) restent la propriété exclusive de l'agence LOLLY SAS et ne sont pas livrés.</li>
                        </ul>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">10. DROIT DE PUBLICITÉ</h2>
                        <p>
                            Sauf refus écrit du Client, l'agence LOLLY SAS se réserve le droit de mentionner sa collaboration avec le Client et de présenter les réalisations comme références commerciales sur ses supports de communication.
                        </p>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">11. PUBLICITÉ EN LIGNE (MANDAT D'ACHAT D'ESPACE)</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>11.1. Distinction des coûts :</strong> Les honoraires de l'agence LOLLY SAS (gestion/création) sont distincts du budget média («budget de boostage»).</li>
                            <li><strong>11.2. Paiement direct :</strong> Le budget publicitaire est payé directement par le Client aux régies (Facebook, Google, etc.) via sa propre carte bancaire. L'agence LOLLY SAS ne fait aucune avance de trésorerie pour l'achat d'espace.</li>
                            <li><strong>11.3. Absence de garantie :</strong> L'agence LOLLY SAS ne garantit aucun résultat chiffré précis (ventes, nombre de clics), les performances dépendant des algorithmes des plateformes tierces.</li>
                        </ul>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">12. COMMUNITY MANAGEMENT</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>12.1. Calendrier :</strong> Le Client doit valider les calendriers éditoriaux dans les délais impartis. À défaut, l'agence LOLLY SAS pourra décaler les publications sans pénalité.</li>
                            <li><strong>12.2. Modération :</strong> La modération des commentaires est assurée uniquement durant les jours ouvrés et heures de bureau, sauf souscription d'une option d'astreinte spécifique.</li>
                            <li><strong>12.3. Responsabilité :</strong> Le Client reste le directeur de la publication et assume la responsabilité juridique des contenus validés et publiés sur ses pages.</li>
                        </ul>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">13. NON-SOLLICITATION DE PERSONNEL</h2>
                        <p>
                            Le Client s'interdit d'embaucher, directement ou indirectement, tout collaborateur de l'agence LOLLY SAS ayant participé à la mission, et ce durant toute la durée du contrat et pendant les 12 mois suivant sa fin. En cas de non-respect, une indemnité égale à 12 mois de salaire brut du collaborateur sera due.
                        </p>
                    </section>

                    <section className="bg-surface/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">14. CONFIDENTIALITÉ</h2>
                        <p>
                            Chacune des parties s'engage à conserver confidentiels les documents et informations stratégiques de l'autre partie durant l'exécution du contrat et pendant une durée de deux ans après son terme.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default CGV;

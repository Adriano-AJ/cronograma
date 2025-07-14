import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function ItalianStudySchedule() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">📚 Rotina de Estudos – Italiano</h1>
      <Tabs defaultValue="manha" className="w-full">
        <TabsList className="flex justify-center">
          <TabsTrigger value="manha">Manhã</TabsTrigger>
          <TabsTrigger value="notas">Notas</TabsTrigger>
        </TabsList>

        <TabsContent value="manha">
          <Card>
            <CardContent className="overflow-x-auto p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dia</TableHead>
                    <TableHead>Horário</TableHead>
                    <TableHead>Atividades</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Segunda</TableCell>
                    <TableCell>08h - 10h</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Gramática básica (artigos, verbos)</li>
                        <li>Vocabulário temático</li>
                        <li>Exercícios em app (Duolingo, Busuu)</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Terça</TableCell>
                    <TableCell>08h - 10h</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Podcast ou vídeo com legenda</li>
                        <li>Repetição em voz alta</li>
                        <li>Série ou filme leve em italiano</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Quarta</TableCell>
                    <TableCell>08h - 10h</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Leitura de textos simples</li>
                        <li>Escrita de frases e pequenos textos</li>
                        <li>Revisão com correções</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Quinta</TableCell>
                    <TableCell>08h - 10h</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Revisar frases úteis</li>
                        <li>Conversa com nativo/tutor</li>
                        <li>Anotar correções e vocabulário</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sexta</TableCell>
                    <TableCell>08h - 10h</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Revisar conteúdo da semana</li>
                        <li>Flashcards (Anki, Quizlet)</li>
                        <li>Produção livre (oral ou escrita)</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sábado</TableCell>
                    <TableCell>08h - 10h</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Ouvir música italiana</li>
                        <li>Vídeo cultural ou vlog</li>
                        <li>Atividade livre em italiano</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notas">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">🎯 Metas Mensais</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Julho:</strong> Frases básicas, saudações, rotina</li>
                  <li><strong>Agosto:</strong> Verbos no passado, pequenas conversas</li>
                  <li><strong>Setembro:</strong> Vocabulário de viagem, compreensão auditiva</li>
                  <li><strong>Outubro:</strong> Fluidez e correções com nativos</li>
                  <li><strong>Novembro-Dezembro:</strong> Simulações de viagem, vocabulário útil</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">🧠 Dicas Extras</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Use o celular em italiano</li>
                  <li>Faça um diário em italiano</li>
                  <li>Simule situações reais de viagem</li>
                  <li>Converse com nativos (HelloTalk, Tandem)</li>
                  <li>Use flashcards todos os dias</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
